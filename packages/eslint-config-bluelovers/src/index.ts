import { findTsconfig } from '@yarn-tool/find-tsconfig';
import { parserOptions } from './eslintrc-json';

export * from './eslintrc-json';

if (parserOptions.project)
{
	const cwd = process.cwd();
	const file = findTsconfig(cwd);

	if (file)
	{
		parserOptions.project = file;
	}
}

export { parserOptions };
