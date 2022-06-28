'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var findTsconfig = require('@yarn-tool/find-tsconfig');

var parser = "@typescript-eslint/parser";
var plugins = [
	"@typescript-eslint",
	"cjk"
];
var parserOptions = {
	project: "./tsconfig.json"
};
var rules = {
	"array-callback-return": "error",
	"arrow-parens": "warn",
	"block-scoped-var": "error",
	"consistent-return": [
		"warn",
		{
			treatUndefinedAsUnspecified: true
		}
	],
	"default-case": [
		"warn"
	],
	"dot-notation": "warn",
	"eol-last": [
		"warn",
		"always"
	],
	"no-multiple-empty-lines": [
		"error",
		{
			max: 1,
			maxEOF: 1,
			maxBOF: 1
		}
	],
	eqeqeq: [
		"error",
		"smart"
	],
	"getter-return": [
		"error",
		{
			allowImplicit: true
		}
	],
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
	"no-empty": [
		"warn",
		{
			allowEmptyCatch: true
		}
	],
	"no-empty-character-class": "error",
	"no-empty-function": "off",
	"@typescript-eslint/no-empty-function": [
		"error",
		{
			allow: [
				"decoratedFunctions"
			]
		}
	],
	"no-empty-pattern": "error",
	"no-eq-null": "off",
	"no-eval": "error",
	"no-ex-assign": "error",
	"no-extend-native": "error",
	"no-extra-bind": "error",
	"no-extra-label": "error",
	"no-extra-semi": "off",
	"@typescript-eslint/no-extra-semi": [
		"error"
	],
	"no-fallthrough": "warn",
	"no-floating-decimal": "error",
	"no-func-assign": "error",
	"no-implicit-coercion": [
		"warn",
		{
			boolean: false
		}
	],
	"no-implied-eval": "off",
	"@typescript-eslint/no-implied-eval": [
		"error"
	],
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
	"no-return-assign": [
		"warn",
		"except-parens"
	],
	"no-return-await": "off",
	"@typescript-eslint/return-await": [
		"error",
		"in-try-catch"
	],
	"no-self-assign": [
		"error",
		{
			props: true
		}
	],
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
	"no-unused-expressions": [
		"warn",
		{
			allowShortCircuit: false,
			allowTernary: false
		}
	],
	"no-unused-labels": "error",
	"no-unused-vars": "off",
	"@typescript-eslint/no-unused-vars": [
		"warn"
	],
	"no-useless-call": "warn",
	"no-useless-concat": "warn",
	"no-useless-escape": "warn",
	"no-useless-rename": [
		"error",
		{
			ignoreDestructuring: true
		}
	],
	"no-useless-return": "warn",
	"no-var": "error",
	"no-with": "error",
	"object-shorthand": "error",
	"prefer-const": "warn",
	"prefer-promise-reject-errors": [
		"warn",
		{
			allowEmptyReject: true
		}
	],
	"prefer-rest-params": "warn",
	radix: [
		"warn",
		"as-needed"
	],
	"require-await": "off",
	"@typescript-eslint/require-await": "warn",
	"require-jsdoc": [
		"warn",
		{
			require: {
				FunctionDeclaration: true,
				MethodDefinition: true,
				ClassDeclaration: true,
				ArrowFunctionExpression: true,
				FunctionExpression: true
			}
		}
	],
	"require-unicode-regexp": "warn",
	"require-yield": "error",
	"symbol-description": "error",
	"use-isnan": "error",
	"valid-jsdoc": [
		"warn",
		{
			prefer: {
				arg: "param",
				argument: "param",
				"class": "constructor",
				"return": "returns",
				virtual: "abstract"
			},
			requireReturnDescription: false
		}
	],
	"valid-typeof": [
		"error",
		{
			requireStringLiterals: true
		}
	],
	"vars-on-top": "warn",
	"wrap-iife": [
		"error",
		"inside",
		{
			functionPrototypeMethods: true
		}
	],
	"@typescript-eslint/adjacent-overload-signatures": "error",
	camelcase: "off",
	"@typescript-eslint/explicit-function-return-type": [
		"warn",
		{
			allowExpressions: true
		}
	],
	"@typescript-eslint/explicit-member-accessibility": [
		"warn",
		{
			accessibility: "explicit",
			overrides: {
				constructors: "no-public",
				accessors: "explicit",
				methods: "explicit",
				properties: "explicit",
				parameterProperties: "explicit"
			}
		}
	],
	"@typescript-eslint/indent": [
		"off"
	],
	"@typescript-eslint/member-delimiter-style": [
		"off",
		{
			multiline: {
				delimiter: "comma",
				requireLast: true
			},
			singleline: {
				delimiter: "comma",
				requireLast: true
			}
		}
	],
	"@typescript-eslint/member-ordering": "off",
	"@typescript-eslint/no-empty-interface": [
		"error",
		{
			allowSingleExtends: false
		}
	],
	"@typescript-eslint/no-object-literal-type-assertion": [
		"off"
	],
	"no-use-before-define": "off",
	"@typescript-eslint/no-use-before-define": [
		"error",
		{
			functions: false,
			classes: true,
			variables: true,
			typedefs: false
		}
	],
	"@typescript-eslint/no-useless-constructor": "warn",
	"@typescript-eslint/no-useless-empty-export": "error",
	"@typescript-eslint/prefer-includes": "warn",
	"@typescript-eslint/prefer-regexp-exec": "error",
	"@typescript-eslint/promise-function-async": [
		"off",
		{
			allowedPromiseNames: [
				"Thenable",
				"Bluebird"
			]
		}
	],
	"@typescript-eslint/require-array-sort-compare": "warn",
	"@typescript-eslint/restrict-plus-operands": [
		"warn",
		{
			checkCompoundAssignments: true
		}
	],
	semi: "off",
	"@typescript-eslint/semi": [
		"warn",
		"always"
	],
	"@typescript-eslint/unbound-method": [
		"error",
		{
			ignoreStatic: true
		}
	],
	"no-irregular-whitespace": "off",
	"cjk/no-irregular-whitespace-extra": [
		"error",
		{
			skipComments: true,
			skipStrings: false,
			skipTemplates: false,
			skipRegExps: false,
			ignores: [
				"　"
			]
		}
	],
	"@typescript-eslint/ban-ts-comment": "off",
	"@typescript-eslint/no-this-alias": [
		"error",
		{
			allowDestructuring: false,
			allowedNames: [
				"_self",
				"_this",
				"self"
			]
		}
	],
	"@typescript-eslint/prefer-nullish-coalescing": [
		"error"
	],
	"@typescript-eslint/prefer-literal-enum-member": [
		"error",
		{
			allowBitwiseExpressions: true
		}
	],
	"@typescript-eslint/prefer-optional-chain": [
		"error"
	],
	"@typescript-eslint/no-confusing-non-null-assertion": [
		"error"
	],
	"@typescript-eslint/no-misused-promises": [
		"error"
	],
	"@typescript-eslint/func-call-spacing": [
		"error",
		"never"
	],
	"no-loop-func": "off",
	"@typescript-eslint/no-loop-func": [
		"error"
	],
	"@typescript-eslint/no-unnecessary-type-assertion": [
		"error"
	],
	"@typescript-eslint/no-var-requires": "error",
	"@typescript-eslint/prefer-as-const": "error",
	"@typescript-eslint/prefer-for-of": "warn",
	"@typescript-eslint/prefer-function-type": "warn",
	"@typescript-eslint/type-annotation-spacing": [
		"error"
	],
	"@typescript-eslint/unified-signatures": "warn",
	"no-misleading-character-class": [
		"error"
	],
	"no-mixed-operators": [
		"error"
	],
	"linebreak-style": [
		"error",
		"unix"
	],
	"@typescript-eslint/no-require-imports": [
		"warn"
	],
	"@typescript-eslint/prefer-readonly-parameter-types": [
		"warn",
		{
			checkParameterProperties: true,
			treatMethodsAsReadonly: true
		}
	]
};
var EslintrcJson = {
	parser: parser,
	plugins: plugins,
	"extends": [
	"eslint:recommended",
	"plugin:@typescript-eslint/recommended",
	"plugin:cjk/recommended"
],
	parserOptions: parserOptions,
	rules: rules
};

const _parser = EslintrcJson['parser'];
const _plugins = EslintrcJson['plugins'];
const _extends = EslintrcJson['extends'];
const _parserOptions = EslintrcJson['parserOptions'];
const _rules = EslintrcJson['rules'];

if (_parserOptions.project) {
  const cwd = /*#__PURE__*/process.cwd();
  const file = /*#__PURE__*/findTsconfig.findTsconfig(cwd);

  if (file) {
    _parserOptions.project = file;
  }
}

exports["extends"] = _extends;
exports.parser = _parser;
exports.parserOptions = _parserOptions;
exports.plugins = _plugins;
exports.rules = _rules;
//# sourceMappingURL=index.cjs.development.cjs.map
