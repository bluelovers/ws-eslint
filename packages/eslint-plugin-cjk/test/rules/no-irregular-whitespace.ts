
// @ts-ignore
import { RuleTester } from 'eslint';
import noIrregularWhitespace from '../../src/rules/no-irregular-whitespace';

const ruleTester = new RuleTester();

// @ts-ignore
ruleTester.run(noIrregularWhitespace.name, noIrregularWhitespace.rule, {
	valid: [
		' ',
		{
			code: '　',
			options: [
				{
					ignores: ['　'],
				},
			],
		} as any,
	],
	invalid: [
		{
			code: '　\f',
			errors: [
				{
					messageId: noIrregularWhitespace['messageId'],
				},
			],
		},
		{
			code: '　',
			errors: [
				{
					messageId: noIrregularWhitespace['messageId'],
				},
			],
		},
	],
});
