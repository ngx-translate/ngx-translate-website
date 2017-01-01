const path = require('path'),
    webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    StyleLintPlugin = require('stylelint-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ngToolsWebpack = require('@ngtools/webpack');

module.exports = function makeWebpackConfig(options) {
    let config = {};

    if(options.env === 'prod') {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'cheap-module-source-map';
    }

    config.entry = {
        'polyfill': './src/app/polyfill.ts',
        'main': options.env === 'prod' ? './src/app/main.aot.ts' : './src/app/main.jit.ts'
    };

    config.output = {
        path: root('./dist'),
        filename: '[name].js',
        chunkFilename: 'chunk/[id].chunk.js'
    };

    config.module = {
        rules: [{
            test: /\.ts$/,
            use: options.env === 'prod' ? ['@ngtools/webpack'] : ['awesome-typescript-loader', 'angular2-template-loader']
        }, {
            test: /\.html$/,
            use: 'raw-loader'
        }, {
            test: /\.css$/,
            loader: 'raw-loader'
        }, {
            test: /\.scss$/,
            include: root('src/app'),
            loaders: ['raw-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.scss$/,
            exclude: root('src/app'),
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: ['css-loader', 'postcss-loader', 'sass-loader']
            })
        }, {
            enforce: 'pre',
            test: /\.ts$/,
            loader: 'tslint-loader'
        }]
    };

    config.plugins = [
        new webpack.ProgressPlugin(),

        // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            root('src')
        ),

        // Reference: https://github.com/kevlened/copy-webpack-plugin
        // Copy assets from the public folder
        new CopyWebpackPlugin([
            {from: 'src/public'}
        ]),

        // Inject script and link tags into html files
        // Reference: https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            chunksSortMode: function(chunk1, chunk2) {
                let orders = ['polyfill', 'main'],
                    order1 = orders.indexOf(chunk1.names[0]),
                    order2 = orders.indexOf(chunk2.names[0]);
                if(order1 > order2) {
                    return 1;
                } else if(order1 < order2) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }),

        // Extract css files
        // Reference: https://github.com/webpack/extract-text-webpack-plugin
        new ExtractTextPlugin({
            filename: 'app.css',
        }),

        new webpack.LoaderOptionsPlugin({
            options: {
                sassLoader: {
                    includePaths: [root('src', 'style')]
                },
                context: '/',
                tslintLoader: {
                    emitErrors: false,
                    failOnHint: false
                }
            }
        }),

        new StyleLintPlugin({
            configFile: '.stylelintrc.js',
            files: 'src/**/*.s?(a|c)ss',
            syntax: 'scss'
        })
    ];

    if(options.env === 'prod') {
        config.plugins.push(
            // Reference: https://github.com/johnagan/clean-webpack-plugin
            // Removes the dist folder before the build
            new CleanWebpackPlugin(['dist'], {
                root: root(),
                verbose: false,
                dry: false
            }),

            new ngToolsWebpack.AotPlugin({
                tsConfigPath: './tsconfig.json'
            }),

            // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
            // Only emit files when there are no errors
            new webpack.NoErrorsPlugin(),

            // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
            // Minify all javascript, switch loaders to minimizing mode
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                comments: false,
                sourceMap: true,
                negate_iife: false
            })
        );
    }

    config.resolve = {
        modules: [
            'node_modules',
            path.resolve(process.cwd(), 'src')
        ],
        extensions: ['.ts', '.js']
    };

    config.devServer = {
        contentBase: './src',
        port: 9000,
        inline: true,
        historyApiFallback: true,
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunks: false
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: 500
        }
    };

    config.stats = 'errors-only';

    return config;
};

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
