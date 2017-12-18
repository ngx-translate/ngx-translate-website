import {Component} from '@angular/core';

@Component({
    selector: 'app',
    styleUrls: ['./app.component.scss'],
    template: `
        <div class="container">
            <div class="header">
                <div class="header-bg"></div>
                <div class="header-title">
                    <img src="/assets/img/logo.png">
                    <div class="header-subtitle">The internationalization (i18n) library for Angular</div>
                </div>
            </div>
            <div class="links">
                <a href="https://github.com/ngx-translate/core">Core</a> /
                <a href="#loaders">Loaders</a> /
                <a href="https://github.com/biesbjerg/ngx-translate-extract">Extractor</a> /
                <a href="https://www.codeandweb.com/babeledit">BabelEdit</a> /
                <a href="https://plnkr.co/edit/WccVZSBM0rUgq2sXSUbe?p=preview" target="_blank">Demo</a>
            </div>
            <div class="content">
                <h3>What is ngx-translate?</h3>
                <p>
                    NGX-Translate is an internationalization library for Angular. It lets you define translations for your content in different languages and switch between them easily.
                    Check out the <a href="https://embed.plnkr.co/pYo6bFPRRxVPgRR8toDt/" target="_blank">demo</a> on Plunker.
                </p>
                <p>It gives you access to a service, a directive and a pipe to handle any dynamic or static content.</p>
                <p>NGX-Translate is also extremely modular. It is written in a way that makes it really easy to replace any part with a custom implementation in case the existing one doesn't fit your needs.</p>
                
                <h3>How to use ngx-translate?</h3>
                <p>The main part of the library is named <code>core</code>. You can use it on its own, but it is usually a good idea to add a loader to load your translations into your application.</p>
                <p>Head over to the <a href="https://github.com/ngx-translate/core">core documentation</a> to get started in 5 minutes and then choose one of the following loaders (or write your own):</p>

                <ul id="loaders">
                    <li><a href="https://github.com/ngx-translate/http-loader">Http Loader</a>: load json translation files with http</li>
                    <li><a href="https://gist.github.com/ocombe/593d21598d988bf6a8609ba5fc00b67e">Angular Universal Loader</a>: load json translation files with fs instead of http</li>
                    <li><a href="https://github.com/biesbjerg/ng2-translate-po-loader">Po Loader</a>: load .po files with http</li>
                </ul>
                
                <p>You can also extract the strings from your code with the <a href="https://github.com/biesbjerg/ngx-translate-extract">extractor</a>. This makes it really easy to start and maintain your translations.</p>
                
                <p>This  <a href="https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate">tutorial</a>
                    explains how to use ngx-translate, ngx-translate-extract and BabelEdit to translate your Angular app.
                </p>
                
                <h3>A question? An Issue?</h3>
                <p>Head over to the <a href="https://github.com/ngx-translate/core/issues">core repository</a> to ask a question or post an issue. You can also <a href="https://twitter.com/OCombe" target="_blank">contact me on twitter</a> if you prefer.</p>
            </div>
            
            <div class="footer">&copy; NGX-Translate 2016-2017</div>
        </div>
    `
})
export class AppComponent {
}
