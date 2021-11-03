// Generated by dts-bundle-generator v5.9.0

/// <reference types="eslint" />
/// <reference types="estree" />
/// <reference types="json-schema" />
/// <reference types="node" />

/**
 * Created by user on 2021/10/27.
 */
export declare const rules: {
	"no-irregular-whitespace-extra": {
		meta: {
			type: "problem";
			docs: {
				description: string;
				recommended: true;
				url: string;
			};
			schema: {
				type: "object";
				properties: {
					skipComments: {
						type: "boolean";
						default: false;
					};
					skipStrings: {
						type: "boolean";
						default: true;
					};
					skipTemplates: {
						type: "boolean";
						default: false;
					};
					skipRegExps: {
						type: "boolean";
						default: false;
					};
				};
				additionalProperties: false;
			}[];
			messages: {
				noIrregularWhitespace: string;
			};
		};
		create(context: import("eslint").Rule.RuleContext): any;
	};
};
export declare const configs: {
	recommended: {
		plugins: string[];
		rules: {
			"cjk/no-irregular-whitespace-extra": string;
		};
	};
};

export {};
