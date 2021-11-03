import { rules } from "./rules";
import { ESLINT_SWITCH, PLUGIN_NAME } from './const';
import noIrregularWhitespace from './rules/no-irregular-whitespace';

export { rules }

export const configs = {
	recommended: {
		plugins: [PLUGIN_NAME],
		rules: {
			"no-irregular-whitespace": [
			ESLINT_SWITCH.OFF,
			{
				"skipComments": true,
				"skipStrings": false,
				"skipTemplates": false,
				"skipRegExps": false,
			},
		],
			[`${PLUGIN_NAME}/no-irregular-whitespace-extra` as const]: noIrregularWhitespace.configs.recommended,
		},
	},
};
