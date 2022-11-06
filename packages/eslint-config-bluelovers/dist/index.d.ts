declare const _parser: string;
declare const _plugins: string[];
declare const _extends: string[];
declare const _parserOptions: {
	project: string;
};
declare const _overrides: any[];
declare const _ignorePatterns: string[];
declare const _rules: {
	"array-callback-return": string;
	"arrow-parens": string;
	"block-scoped-var": string;
	"consistent-return": (string | {
		treatUndefinedAsUnspecified: boolean;
	})[];
	"default-case": string[];
	"dot-notation": string;
	"eol-last": string[];
	"no-multiple-empty-lines": (string | {
		max: number;
		maxEOF: number;
		maxBOF: number;
	})[];
	eqeqeq: string[];
	"getter-return": (string | {
		allowImplicit: boolean;
	})[];
	"no-alert": string;
	"no-buffer-constructor": string;
	"no-caller": string;
	"no-case-declarations": string;
	"no-catch-shadow": string;
	"no-compare-neg-zero": string;
	"no-control-regex": string;
	"no-div-regex": string;
	"no-dupe-args": string;
	"no-dupe-keys": string;
	"no-duplicate-case": string;
	"no-else-return": string;
	"no-empty": (string | {
		allowEmptyCatch: boolean;
	})[];
	"no-empty-character-class": string;
	"no-empty-function": string;
	"@typescript-eslint/no-empty-function": (string | {
		allow: string[];
	})[];
	"no-empty-pattern": string;
	"no-eq-null": string;
	"no-eval": string;
	"no-ex-assign": string;
	"no-extend-native": string;
	"no-extra-bind": string;
	"no-extra-label": string;
	"no-extra-semi": string;
	"@typescript-eslint/no-extra-semi": string[];
	"no-fallthrough": string;
	"no-floating-decimal": string;
	"no-func-assign": string;
	"no-implicit-coercion": (string | {
		boolean: boolean;
	})[];
	"no-implied-eval": string;
	"@typescript-eslint/no-implied-eval": string[];
	"no-invalid-regexp": string;
	"no-invalid-this": string;
	"no-iterator": string;
	"no-label-var": string;
	"no-labels": string;
	"no-multi-spaces": string;
	"no-multi-str": string;
	"no-new": string;
	"no-new-wrappers": string;
	"no-obj-calls": string;
	"no-octal-escape": string;
	"no-proto": string;
	"no-prototype-builtins": string;
	"no-redeclare": string;
	"no-regex-spaces": string;
	"no-return-assign": string[];
	"no-return-await": string;
	"@typescript-eslint/return-await": string[];
	"no-self-assign": (string | {
		props: boolean;
	})[];
	"no-self-compare": string;
	"no-sequences": string;
	"no-shadow": string;
	"no-shadow-restricted-names": string;
	"no-sparse-arrays": string;
	"no-template-curly-in-string": string;
	"no-throw-literal": string;
	"no-undefined": string;
	"no-unexpected-multiline": string;
	"no-unmodified-loop-condition": string;
	"no-unreachable": string;
	"no-unsafe-finally": string;
	"no-unsafe-negation": string;
	"no-unused-expressions": (string | {
		allowShortCircuit: boolean;
		allowTernary: boolean;
	})[];
	"no-unused-labels": string;
	"no-unused-vars": string;
	"@typescript-eslint/no-unused-vars": string[];
	"no-useless-call": string;
	"no-useless-concat": string;
	"no-useless-escape": string;
	"no-useless-rename": (string | {
		ignoreDestructuring: boolean;
	})[];
	"no-useless-return": string;
	"no-var": string;
	"no-with": string;
	"object-shorthand": string;
	"prefer-const": string;
	"prefer-promise-reject-errors": (string | {
		allowEmptyReject: boolean;
	})[];
	"prefer-rest-params": string;
	radix: string[];
	"require-await": string;
	"@typescript-eslint/require-await": string;
	"require-jsdoc": (string | {
		require: {
			FunctionDeclaration: boolean;
			MethodDefinition: boolean;
			ClassDeclaration: boolean;
			ArrowFunctionExpression: boolean;
			FunctionExpression: boolean;
		};
	})[];
	"require-unicode-regexp": string;
	"require-yield": string;
	"symbol-description": string;
	"use-isnan": string;
	"valid-jsdoc": (string | {
		prefer: {
			arg: string;
			argument: string;
			class: string;
			return: string;
			virtual: string;
		};
		requireReturnDescription: boolean;
	})[];
	"valid-typeof": (string | {
		requireStringLiterals: boolean;
	})[];
	"vars-on-top": string;
	"wrap-iife": (string | {
		functionPrototypeMethods: boolean;
	})[];
	"@typescript-eslint/adjacent-overload-signatures": string;
	camelcase: string;
	"@typescript-eslint/explicit-function-return-type": (string | {
		allowExpressions: boolean;
	})[];
	"@typescript-eslint/explicit-member-accessibility": (string | {
		accessibility: string;
		overrides: {
			constructors: string;
			accessors: string;
			methods: string;
			properties: string;
			parameterProperties: string;
		};
	})[];
	"@typescript-eslint/indent": string[];
	"@typescript-eslint/member-delimiter-style": (string | {
		multiline: {
			delimiter: string;
			requireLast: boolean;
		};
		singleline: {
			delimiter: string;
			requireLast: boolean;
		};
	})[];
	"@typescript-eslint/member-ordering": string;
	"@typescript-eslint/no-empty-interface": (string | {
		allowSingleExtends: boolean;
	})[];
	"@typescript-eslint/no-object-literal-type-assertion": string[];
	"no-use-before-define": string;
	"@typescript-eslint/no-use-before-define": (string | {
		functions: boolean;
		classes: boolean;
		variables: boolean;
		typedefs: boolean;
	})[];
	"@typescript-eslint/no-useless-constructor": string;
	"@typescript-eslint/no-useless-empty-export": string;
	"@typescript-eslint/prefer-includes": string;
	"@typescript-eslint/prefer-regexp-exec": string;
	"@typescript-eslint/promise-function-async": (string | {
		allowedPromiseNames: string[];
	})[];
	"@typescript-eslint/require-array-sort-compare": string;
	"@typescript-eslint/restrict-plus-operands": (string | {
		checkCompoundAssignments: boolean;
	})[];
	semi: string;
	"@typescript-eslint/semi": string[];
	"@typescript-eslint/unbound-method": (string | {
		ignoreStatic: boolean;
	})[];
	"no-irregular-whitespace": string;
	"cjk/no-irregular-whitespace-extra": (string | {
		skipComments: boolean;
		skipStrings: boolean;
		skipTemplates: boolean;
		skipRegExps: boolean;
		ignores: string[];
	})[];
	"@typescript-eslint/ban-ts-comment": string;
	"@typescript-eslint/no-this-alias": (string | {
		allowDestructuring: boolean;
		allowedNames: string[];
	})[];
	"@typescript-eslint/prefer-nullish-coalescing": string[];
	"@typescript-eslint/prefer-literal-enum-member": (string | {
		allowBitwiseExpressions: boolean;
	})[];
	"@typescript-eslint/prefer-optional-chain": string[];
	"@typescript-eslint/no-confusing-non-null-assertion": string[];
	"@typescript-eslint/no-misused-promises": string[];
	"@typescript-eslint/func-call-spacing": string[];
	"no-loop-func": string;
	"@typescript-eslint/no-loop-func": string[];
	"@typescript-eslint/no-unnecessary-type-assertion": string[];
	"@typescript-eslint/no-var-requires": string;
	"@typescript-eslint/prefer-as-const": string;
	"@typescript-eslint/prefer-for-of": string;
	"@typescript-eslint/prefer-function-type": string;
	"@typescript-eslint/type-annotation-spacing": string[];
	"@typescript-eslint/unified-signatures": string;
	"no-misleading-character-class": string[];
	"no-mixed-operators": string[];
	"linebreak-style": string[];
	"@typescript-eslint/no-require-imports": string[];
	"@typescript-eslint/prefer-readonly-parameter-types": (string | {
		checkParameterProperties: boolean;
		treatMethodsAsReadonly: boolean;
	})[];
	"no-extra-parens": string;
	"@typescript-eslint/no-extra-parens": (string | {
		ignoreJSX: string;
	})[];
};

export {
	_parserOptions as parserOptions,
};

export {};
