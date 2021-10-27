import { Rule } from 'eslint';

export function createRule<META extends Readonly<Record<string, any>>, RULE extends Rule.RuleModule, NAME extends string>(meta: META & {
	readonly name: NAME,
}, rule: RULE)
{
	return {
		...meta,
		rule,
	}
}
