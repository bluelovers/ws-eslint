export declare const enum ESLINT_SWITCH {
	ERROR = "error",
	OFF = "off"
}
export declare const enum ESLINT_META_TYPE {
	PROBLEM = "problem"
}
export interface IOptions {
	skipComments?: boolean;
	skipStrings?: boolean;
	skipRegExps?: boolean;
	skipTemplates?: boolean;
	ignores?: string[];
}
export declare const rules: {
	"no-irregular-whitespace-extra": {
		meta: {
			type: ESLINT_META_TYPE;
			docs: {
				description: string;
				category: string;
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
					ignores: {
						type: "array";
						items: {
							type: "string";
						};
					};
				};
				additionalProperties: false;
			}[];
			messages: {
				noIrregularWhitespace: string;
			};
		};
		defaultOptions: (ESLINT_SWITCH | IOptions)[];
		create(context: import("eslint").Rule.RuleContext): any;
	};
};
export declare const configs: {
	recommended: {
		plugins: "cjk"[];
		rules: {
			"no-irregular-whitespace": (ESLINT_SWITCH | {
				skipComments: boolean;
				skipStrings: boolean;
				skipTemplates: boolean;
				skipRegExps: boolean;
			})[];
			"cjk/no-irregular-whitespace-extra": ESLINT_SWITCH | [
				ESLINT_SWITCH,
				...any[]
			];
		};
	};
};

export {};
