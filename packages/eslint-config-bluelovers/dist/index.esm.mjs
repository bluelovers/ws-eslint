import { findTsconfig as r } from "@yarn-tool/find-tsconfig";

const e = "@typescript-eslint/parser", n = [ "@typescript-eslint", "cjk" ], o = [ "eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:cjk/recommended" ], t = {
  project: "./tsconfig.json"
}, s = {
  "array-callback-return": "error",
  "arrow-parens": "warn",
  "block-scoped-var": "error",
  "consistent-return": [ "warn", {
    treatUndefinedAsUnspecified: !0
  } ],
  "default-case": [ "warn" ],
  "dot-notation": "warn",
  "eol-last": [ "warn", "always" ],
  "no-multiple-empty-lines": [ "error", {
    max: 1,
    maxEOF: 1,
    maxBOF: 1
  } ],
  eqeqeq: [ "error", "smart" ],
  "getter-return": [ "error", {
    allowImplicit: !0
  } ],
  "no-alert": "error",
  "no-buffer-constructor": "error",
  "no-caller": "error",
  "no-case-declarations": "error",
  "no-catch-shadow": "error",
  "no-compare-neg-zero": "error",
  "no-control-regex": "error",
  "no-div-regex": "warn",
  "no-dupe-args": "error",
  "no-dupe-keys": "error",
  "no-duplicate-case": "error",
  "no-else-return": "warn",
  "no-empty": [ "warn", {
    allowEmptyCatch: !0
  } ],
  "no-empty-character-class": "error",
  "no-empty-function": "off",
  "@typescript-eslint/no-empty-function": [ "error", {
    allow: [ "decoratedFunctions" ]
  } ],
  "no-empty-pattern": "error",
  "no-eq-null": "off",
  "no-eval": "error",
  "no-ex-assign": "error",
  "no-extend-native": "error",
  "no-extra-bind": "error",
  "no-extra-label": "error",
  "no-extra-semi": "off",
  "@typescript-eslint/no-extra-semi": [ "error" ],
  "no-fallthrough": "warn",
  "no-floating-decimal": "error",
  "no-func-assign": "error",
  "no-implicit-coercion": [ "warn", {
    boolean: !1
  } ],
  "no-implied-eval": "off",
  "@typescript-eslint/no-implied-eval": [ "error" ],
  "no-invalid-regexp": "error",
  "no-invalid-this": "warn",
  "no-iterator": "error",
  "no-label-var": "error",
  "no-labels": "warn",
  "no-multi-spaces": "error",
  "no-multi-str": "error",
  "no-new": "error",
  "no-new-wrappers": "warn",
  "no-obj-calls": "error",
  "no-octal-escape": "error",
  "no-proto": "warn",
  "no-prototype-builtins": "error",
  "no-redeclare": "error",
  "no-regex-spaces": "error",
  "no-return-assign": [ "warn", "except-parens" ],
  "no-return-await": "off",
  "@typescript-eslint/return-await": [ "error", "in-try-catch" ],
  "no-self-assign": [ "error", {
    props: !0
  } ],
  "no-self-compare": "error",
  "no-sequences": "error",
  "no-shadow": "warn",
  "no-shadow-restricted-names": "error",
  "no-sparse-arrays": "error",
  "no-template-curly-in-string": "error",
  "no-throw-literal": "error",
  "no-undefined": "error",
  "no-unexpected-multiline": "error",
  "no-unmodified-loop-condition": "error",
  "no-unreachable": "error",
  "no-unsafe-finally": "warn",
  "no-unsafe-negation": "error",
  "no-unused-expressions": [ "warn", {
    allowShortCircuit: !1,
    allowTernary: !1
  } ],
  "no-unused-labels": "error",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": [ "warn" ],
  "no-useless-call": "warn",
  "no-useless-concat": "warn",
  "no-useless-escape": "warn",
  "no-useless-rename": [ "error", {
    ignoreDestructuring: !0
  } ],
  "no-useless-return": "warn",
  "no-var": "error",
  "no-with": "error",
  "object-shorthand": "error",
  "prefer-const": "warn",
  "prefer-promise-reject-errors": [ "warn", {
    allowEmptyReject: !0
  } ],
  "prefer-rest-params": "warn",
  radix: [ "warn", "as-needed" ],
  "require-await": "off",
  "@typescript-eslint/require-await": "warn",
  "require-jsdoc": [ "warn", {
    require: {
      FunctionDeclaration: !0,
      MethodDefinition: !0,
      ClassDeclaration: !0,
      ArrowFunctionExpression: !0,
      FunctionExpression: !0
    }
  } ],
  "require-unicode-regexp": "warn",
  "require-yield": "error",
  "symbol-description": "error",
  "use-isnan": "error",
  "valid-jsdoc": [ "warn", {
    prefer: {
      arg: "param",
      argument: "param",
      class: "constructor",
      return: "returns",
      virtual: "abstract"
    },
    requireReturnDescription: !1
  } ],
  "valid-typeof": [ "error", {
    requireStringLiterals: !0
  } ],
  "vars-on-top": "warn",
  "wrap-iife": [ "error", "inside", {
    functionPrototypeMethods: !0
  } ],
  "@typescript-eslint/adjacent-overload-signatures": "error",
  camelcase: "off",
  "@typescript-eslint/explicit-function-return-type": [ "warn", {
    allowExpressions: !0
  } ],
  "@typescript-eslint/explicit-member-accessibility": [ "warn", {
    accessibility: "explicit",
    overrides: {
      constructors: "no-public",
      accessors: "explicit",
      methods: "explicit",
      properties: "explicit",
      parameterProperties: "explicit"
    }
  } ],
  "@typescript-eslint/indent": [ "off" ],
  "@typescript-eslint/member-delimiter-style": [ "off", {
    multiline: {
      delimiter: "comma",
      requireLast: !0
    },
    singleline: {
      delimiter: "comma",
      requireLast: !0
    }
  } ],
  "@typescript-eslint/member-ordering": "off",
  "@typescript-eslint/no-empty-interface": [ "error", {
    allowSingleExtends: !1
  } ],
  "@typescript-eslint/no-object-literal-type-assertion": [ "off" ],
  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": [ "error", {
    functions: !1,
    classes: !0,
    variables: !0,
    typedefs: !1
  } ],
  "@typescript-eslint/no-useless-constructor": "warn",
  "@typescript-eslint/no-useless-empty-export": "error",
  "@typescript-eslint/prefer-includes": "warn",
  "@typescript-eslint/prefer-regexp-exec": "error",
  "@typescript-eslint/promise-function-async": [ "off", {
    allowedPromiseNames: [ "Thenable", "Bluebird" ]
  } ],
  "@typescript-eslint/require-array-sort-compare": "warn",
  "@typescript-eslint/restrict-plus-operands": [ "warn", {
    checkCompoundAssignments: !0
  } ],
  semi: "off",
  "@typescript-eslint/semi": [ "warn", "always" ],
  "@typescript-eslint/unbound-method": [ "error", {
    ignoreStatic: !0
  } ],
  "no-irregular-whitespace": "off",
  "cjk/no-irregular-whitespace-extra": [ "error", {
    skipComments: !0,
    skipStrings: !1,
    skipTemplates: !1,
    skipRegExps: !1,
    ignores: [ "　" ]
  } ],
  "@typescript-eslint/ban-ts-comment": "off",
  "@typescript-eslint/no-this-alias": [ "error", {
    allowDestructuring: !1,
    allowedNames: [ "_self", "_this", "self" ]
  } ],
  "@typescript-eslint/prefer-nullish-coalescing": [ "error" ],
  "@typescript-eslint/prefer-literal-enum-member": [ "error", {
    allowBitwiseExpressions: !0
  } ],
  "@typescript-eslint/prefer-optional-chain": [ "error" ],
  "@typescript-eslint/no-confusing-non-null-assertion": [ "error" ],
  "@typescript-eslint/no-misused-promises": [ "error" ],
  "@typescript-eslint/func-call-spacing": [ "error", "never" ],
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": [ "error" ],
  "@typescript-eslint/no-unnecessary-type-assertion": [ "error" ],
  "@typescript-eslint/no-var-requires": "error",
  "@typescript-eslint/prefer-as-const": "error",
  "@typescript-eslint/prefer-for-of": "warn",
  "@typescript-eslint/prefer-function-type": "warn",
  "@typescript-eslint/type-annotation-spacing": [ "error" ],
  "@typescript-eslint/unified-signatures": "warn",
  "no-misleading-character-class": [ "error" ],
  "no-mixed-operators": [ "error" ],
  "linebreak-style": [ "error", "unix" ],
  "@typescript-eslint/no-require-imports": [ "warn" ],
  "@typescript-eslint/prefer-readonly-parameter-types": [ "warn", {
    checkParameterProperties: !0,
    treatMethodsAsReadonly: !0
  } ]
};

if (t.project) {
  const e = r(process.cwd());
  e && (t.project = e);
}

export { o as extends, e as parser, t as parserOptions, n as plugins, s as rules };
//# sourceMappingURL=index.esm.mjs.map
