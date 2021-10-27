import type { Rule } from "eslint";
// @ts-ignore
import type { Linter } from 'eslint';

import { rules } from "./rules";

type EslintPluginConfig = {
	readonly rules: Record<string, Rule.RuleModule>;
	// @ts-ignore
	readonly configs: Record<string, any>;
};

export const config: EslintPluginConfig = {
	rules,
	configs: {
		recommended: {
			plugins: ["cjk"],
			rules: {
				"cjk/no-irregular-whitespace-extra": "error",
			},
		},
	},
};

export default config;
