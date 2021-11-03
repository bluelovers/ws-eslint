import { rules } from "./rules";

export { rules }

export const configs = {
	recommended: {
		plugins: ["cjk"],
		rules: {
			"cjk/no-irregular-whitespace-extra": "error",
		},
	},
};
