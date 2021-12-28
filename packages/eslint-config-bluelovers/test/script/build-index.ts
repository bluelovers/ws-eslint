
import EslintrcJson from '../../.eslintrc-json.json';
import { outputFileSync } from 'fs-extra';
import { join } from 'path';
import { __root } from '../__root';

const lines: string[] = [];

const keys = Object.keys(EslintrcJson) as (keyof typeof EslintrcJson)[];

lines.push('');

keys
	.forEach(key => {
		lines.push(
			`const _${key} = EslintrcJson['${key}'];`,
			`export { _${key} as ${key} };`,
		)
	})

lines.unshift(`import EslintrcJson from '../.eslintrc-json.json';`);

lines.push('');

outputFileSync(join(__root, 'src/eslintrc-json.ts'), lines.join('\n'));
