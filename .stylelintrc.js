module.exports = {
    "plugins": [
        "stylelint-scss"
    ],
    "rules": {
        "at-rule-name-case": "lower", // Specify lowercase or uppercase for at-rules names.
        "at-rule-name-space-after": "always-single-line", // Require a single space after at-rule names.
        "at-rule-semicolon-newline-after": "always", // Require a newline after the semicolon of at-rules.

        "block-closing-brace-newline-after": "always", // Require a newline or disallow whitespace after the closing brace of blocks.
        "block-closing-brace-newline-before": "always-multi-line", // Require a newline or disallow whitespace before the closing brace of blocks.
        "block-closing-brace-space-before": "always-single-line", // Require a single space or disallow whitespace before the closing brace of blocks.
        "block-no-empty": true, // Disallow empty blocks.
        "block-opening-brace-newline-after": "always-multi-line", // Require a newline after the opening brace of blocks.
        "block-opening-brace-space-after": "always-single-line", // Require a newline or disallow whitespace before the opening brace of blocks.
        "block-opening-brace-space-before": "always", // Require a single space or disallow whitespace before the opening brace of blocks.

        "color-hex-case": "lower", // Specify lowercase or uppercase for hex colors.
        "color-hex-length": "short", // Specify short or long notation for hex colors.
        "color-no-invalid-hex": true, // Disallow invalid hex colors.

        "comment-empty-line-before": ["always", { // Require or disallow an empty line before comments.
            except: ["first-nested"],
            ignore: ["stylelint-commands"]
        }],
        "comment-whitespace-inside": "always", // Require or disallow whitespace on the inside of comment markers.

        "declaration-bang-space-after": "never", // Require a single space or disallow whitespace after the bang of declarations.
        "declaration-bang-space-before": "always", // Require a single space or disallow whitespace before the bang of declarations.
        "declaration-block-no-duplicate-properties": true, // Disallow duplicate properties within declaration blocks.
        "declaration-block-no-ignored-properties": true, // Disallow property values that are ignored due to another property value in the same rule.
        "declaration-block-no-shorthand-property-overrides": true, // Disallow shorthand properties that override related longhand properties within declaration blocks.
        "declaration-block-semicolon-newline-after": "always-multi-line", // Require a newline or disallow whitespace after the semicolons of declaration blocks.
        "declaration-block-semicolon-space-after": "always-single-line", // Require a single space or disallow whitespace after the semicolons of declaration blocks.
        "declaration-block-semicolon-space-before": "never", // Require a single space or disallow whitespace before the semicolons of declaration blocks.
        "declaration-block-single-line-max-declarations": 1, // Limit the number of declaration within single line declaration blocks.
        "declaration-block-trailing-semicolon": "always", // Require or disallow a trailing semicolon within declaration blocks.
        "declaration-colon-newline-after": "always-multi-line", // Require a newline or disallow whitespace after the colon of declarations.
        "declaration-colon-space-after": "always-single-line", // Require a single space or disallow whitespace after the colon of declarations.
        "declaration-colon-space-before": "never", // Require a single space or disallow whitespace before the colon of declarations.

        "function-calc-no-unspaced-operator": true, // Disallow an unspaced operator within calc functions.
        "function-comma-newline-after": "always-multi-line", // Require a newline or disallow whitespace after the commas of functions.
        "function-comma-space-after": "always-single-line", // Require a single space or disallow whitespace after the commas of functions.
        "function-comma-space-before": "never", // Require a single space or disallow whitespace before the commas of functions.
        "function-linear-gradient-no-nonstandard-direction": true, // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
        "function-max-empty-lines": 0, // Limit the number of adjacent empty lines within functions.
        "function-name-case": "lower", // Specify lowercase or uppercase for function names.
        "function-parentheses-newline-inside": "always-multi-line", // Require a newline or disallow whitespace on the inside of the parentheses of functions.
        "function-parentheses-space-inside": "never-single-line", // Require a single space or disallow whitespace on the inside of the parentheses of functions.
        "function-whitespace-after": "always", // Require or disallow whitespace after functions.

        "media-feature-colon-space-after": "always", // Require a single space or disallow whitespace after the colon in media features.
        "media-feature-colon-space-before": "never", // Require a single space or disallow whitespace before the colon in media features.
        "media-feature-no-missing-punctuation": true, // Disallow missing punctuation for non-boolean media features.
        "media-feature-range-operator-space-after": "always", // Require a single space or disallow whitespace after the range operator in media features.
        "media-feature-range-operator-space-before": "always", // Require a single space or disallow whitespace before the range operator in media features.
        "media-query-list-comma-newline-after": "always-multi-line", // Require a newline or disallow whitespace after the commas of media query lists.
        "media-query-list-comma-space-after": "always-single-line", // Require a single space or disallow whitespace after the commas of media query lists.
        "media-query-list-comma-space-before": "never", // Require a single space or disallow whitespace before the commas of media query lists.
        "media-feature-parentheses-space-inside": "never", // Require a single space or disallow whitespace on the inside of the parentheses within media queries.

        "selector-attribute-brackets-space-inside": "never", // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
        "selector-attribute-operator-space-after": "never", // Require a single space or disallow whitespace after operators within attribute selectors.
        "selector-attribute-operator-space-before": "never", // Require a single space or disallow whitespace before operators within attribute selectors.
        "selector-combinator-space-after": "always", // Require a single space or disallow whitespace after the combinators of selectors.
        "selector-combinator-space-before": "always", // Require a single space or disallow whitespace before the combinators of selectors.
        "selector-list-comma-newline-after": "always-multi-line", // Require a newline or disallow whitespace after the commas of selector lists.
        "selector-list-comma-space-before": "never", // Require a newline or disallow whitespace before the commas of selector lists.
        "selector-max-empty-lines": 0, // Limit the number of adjacent empty lines within selectors.
        "selector-pseudo-class-case": "lower", // Specify lowercase or uppercase for pseudo-class selectors.
        "selector-pseudo-class-parentheses-space-inside": "never", // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
        "selector-pseudo-element-case": "lower", // Specify lowercase or uppercase for pseudo-element selectors.
        "selector-pseudo-element-colon-notation": "double", // Specify single or double colon notation for applicable pseudo-elements.
        "selector-pseudo-element-no-unknown": true, // Disallow unknown pseudo-element selectors.
        "selector-type-case": "lower", // Specify lowercase or uppercase for type selector.
        "selector-max-compound-selectors": 8, // Limit the number of compound selectors in a selector.
        "selector-no-id": true, // Disallow id selectors.

        "value-list-comma-newline-after": "always-multi-line", // Require a newline or disallow whitespace after the commas of value lists.
        "value-list-comma-space-after": "always-single-line", // Require a single space or disallow whitespace after the commas of value lists.
        "value-list-comma-space-before": "never", // Require a single space or disallow whitespace before the commas of value lists.

        // Specify indentation.
        "indentation": 4,
        "keyframe-declaration-no-important": true, // Disallow !important within keyframe declarations.
        "length-zero-no-unit": true, // Disallow units for zero lengths.
        "max-empty-lines": 1, // Limit the number of adjacent empty lines.
        "no-eol-whitespace": true, // Disallow end-of-line whitespace.
        "no-extra-semicolons": true, // Disallow extra semicolons.
        "no-missing-end-of-source-newline": true, // Disallow missing end-of-file newline.
        "number-leading-zero": "always", // Require or disallow a leading zero for fractional numbers less than 1.
        "number-no-trailing-zeros": true, // Disallow trailing zeros in numbers.
        "property-case": "lower", // Specify lowercase or uppercase for properties.
        "rule-nested-empty-line-before": ["always-multi-line", { // Require or disallow an empty line before nested rules.
            except: ["first-nested"]
        }],
        "rule-non-nested-empty-line-before": ["always-multi-line", { // Require or disallow an empty line before non-nested rules.
            ignore: ["after-comment"]
        }],
        "shorthand-property-no-redundant-values": true, // Disallow redundant values in shorthand properties.
        "string-no-newline": true, // Disallow (unescaped) newlines in strings.
        "unit-case": "lower", // Specify lowercase or uppercase for units.
        "unit-no-unknown": true, // Disallow unknown units.
        "time-no-imperceptible": true, // Disallow animation and transition less than or equal to 100ms.
        "value-no-vendor-prefix": true, // Disallow vendor prefixes for values.
        "property-no-vendor-prefix": true, // Disallow vendor prefixes for properties.
        "no-duplicate-selectors": true, // Disallow duplicate selectors within a stylesheet.
        "no-indistinguishable-colors": [true, { // Disallow colors that are suspiciously close to being identical.
            threshold: 2
        }],
        "no-unknown-animations": true, // Disallow animation names that do not correspond to a @keyframes declaration.

        // scss specific
        "scss/selector-no-redundant-nesting-selector": true // Disallow redundant nesting selectors (&)
    },
};
