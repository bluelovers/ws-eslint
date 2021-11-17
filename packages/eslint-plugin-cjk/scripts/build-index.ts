import { camelCase } from 'lodash';
import { async as FastGlob } from '@bluelovers/fast-glob/bluebird';
import { resolve, basename, extname } from 'path';
import { outputFile } from 'fs-extra';

const __root = resolve(__dirname, '..');

export default FastGlob([
	'!index.*',
	'*.ts',
], {
	cwd: resolve(__root, 'src/rules'),
})
	.tap(list =>
	{
		const imports: string[] = [];
		const rules: string[] = [];

		list.forEach(file =>
		{

			const filename = basename(file, extname(file));
			const name = camelCase(filename);

			imports.push(`import { default as ${name} } from './${filename}';`);

			rules.push(`\t[${name}.name]: ${name}.rule,`);
		});

		const lines: string[] = [];

		lines.push('');
		lines.push(...imports);
		lines.push('');
		lines.push('export const rules = {');
		lines.push(...rules);
		lines.push('};');
		lines.push('');
		lines.push('export default rules;');
		lines.push('');
		lines.push('');

		const content = lines.join('\n');

		console.log('src/rules/index.ts');

		console.log(content);

		return outputFile(resolve(__root, 'src/rules/index.ts'), content)
	})
;



