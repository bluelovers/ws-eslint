import { findTsconfig } from '@yarn-tool/find-tsconfig';
import { overrides, parserOptions } from './eslintrc-json';
import { requireResolveExtra } from '@yarn-tool/require-resolve';

export * from './eslintrc-json';

const cwd = process.cwd();
const file = findTsconfig(cwd);

if (file)
{
	parserOptions.project = file;
}

(() =>
{
	const _ = requireResolveExtra('eslint-plugin-jest');

	if (_?.result)
	{
		overrides.push({
			"files": [
				"**/*.(spec|test).[cm]?tsx?",
			],
			"plugins": [
				"jest",
			],
			"extends": [
				"plugin:jest/recommended",
				"plugin:jest/style",
			],
			"rules": {
				"jest/expect-expect": "warn",
			},
		});
	}
})();

export { parserOptions };
