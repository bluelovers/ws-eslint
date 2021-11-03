import { Rule } from 'eslint';
import { ESLINT_SWITCH } from '../../const';

type _IOptions = ESLINT_SWITCH | [ESLINT_SWITCH, ...any[]];

export function createRule<META extends Readonly<Record<string, any>>, RULE extends Rule.RuleModule, NAME extends string, EXTRA extends Record<string, any>>(meta: META & {
	readonly name: NAME,
	readonly configs?: {
		recommended: _IOptions,
		[name: string]: _IOptions,
	}
} & EXTRA, rule: RULE)
{
	return {
		...meta,
		rule,
	}
}
