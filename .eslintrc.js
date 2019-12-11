module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "modules": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {},
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-newline": "off",
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-callback-return": "error",
    "array-element-newline": "off",
    "arrow-body-style": "off",
    "arrow-parens": [
      "warn",
      "as-needed"
    ],
    "arrow-spacing": "error",
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": "off",
    "callback-return": "warn",
    "camelcase": "off",
    "capitalized-comments": "off",
    "comma-dangle": "off",
    "comma-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "complexity": "off",
    "computed-property-spacing": "error",
    "consistent-return": "off",
    "consistent-this": "error",
    "curly": [
      "error",
      "multi-line"
    ],
    "default-case": "off",
    "dot-location": "off",
    "dot-notation": "error",
    "eol-last": [
      "error",
      "always"
    ],
    "eqeqeq": "error",
    "for-direction": "error",
    "func-call-spacing": "error",
    "func-name-matching": "off",
    "func-names": "off",
    "func-style": "off",
    "function-paren-newline": "off",
    "generator-star-spacing": "error",
    "getter-return": "error",
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-length": "off",
    "id-match": "error",
    "implicit-arrow-linebreak": [
      "error",
      "beside"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "ignoredNodes": ["TemplateLiteral"]
      }
    ],
    "indent-legacy": "off",
    "init-declarations": "error",
    "jsx-quotes": [
      "warn",
      "prefer-double"
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "line-comment-position": "off",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": "warn",
    "lines-around-directive": "error",
    "lines-between-class-members": [
      "warn",
      "always"
    ],
    "max-depth": [
      "error",
      4
    ],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "max-lines": "off",
    "max-nested-callbacks": [
      "error",
      4
    ],
    "max-params": [
      "error",
      5
    ],
    "max-statements": "off",
    "max-statements-per-line": [
      "error",
      {
        "max": 1
      }
    ],
    "multiline-comment-style": "off",
    "multiline-ternary": "off",
    "new-cap": "off",
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "error",
    "newline-per-chained-call": "off",
    "no-alert": "off",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "off",
    "no-buffer-constructor": "off",
    "no-caller": "error",
    "no-case-declarations": "off",
    "no-catch-shadow": "error",
    "no-confusing-arrow": "error",
    "no-console": "off",
    "no-continue": "off",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "warn",
    "no-empty": "warn",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "off",
    "no-extra-label": "off",
    "no-extra-parens": "off",
    "no-floating-decimal": "off",
    "no-implicit-coercion": "off",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-label-var": "off",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-mixed-operators": "error",
    "no-mixed-requires": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxEOF": 1
      }
    ],
    "no-native-reassign": "error",
    "no-negated-condition": "off",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "off",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-path-concat": "error",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "off",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "off",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "off",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": true
      }
    ],
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "off",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "off",
    "no-use-before-define": [
      "warn",
      {
        "functions": false
      }
    ],
    "no-useless-call": "error",
    "no-useless-computed-key": "off",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-useless-escape": "off",
    "no-var": "off",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-property-newline": "off",
    "object-shorthand": "off",
    "one-var": "off",
    "one-var-declaration-per-line": "error",
    "operator-assignment": "off",
    "operator-linebreak": [
      "error",
      "after",
      {
        "overrides": {
          "?": "ignore",
          ":": "ignore"
        }
      }
    ],
    "padded-blocks": "off",
    "padding-line-between-statements": "error",
    "prefer-arrow-callback": "off",
    "prefer-const": "warn",
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "error",
    "prefer-promise-reject-errors": "warn",
    "prefer-reflect": "off",
    "prefer-rest-params": "error",
    "prefer-spread": "off",
    // For OLEG
    "prefer-template": "warn",
    "quote-props": "off",
    "quotes": [
      "warn",
      "double"
    ],
    "radix": "error",
    "require-await": "off",
    "require-jsdoc": "off",
    "rest-spread-spacing": "off",
    "semi": "off",
    "semi-spacing": "error",
    "semi-style": [
      "error",
      "last"
    ],
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": "off",
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "off",
    "strict": "error",
    "switch-colon-spacing": "error",
    "symbol-description": "error",
    "template-curly-spacing": "off",
    "template-tag-spacing": [
      "error",
      "always"
    ],
    "unicode-bom": [
      "error",
      "never"
    ],
    "valid-jsdoc": "error",
    "vars-on-top": "error",
    "wrap-iife": [
      "error",
      "outside"
    ],
    "wrap-regex": "off",
    "yield-star-spacing": "error",
    "yoda": "error",
    "class-methods-use-this": "off",
    "react/no-unescaped-entities": "off",
    "react/no-string-refs": "off"
  }
};
