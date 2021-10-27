/*
 * https://github.com/eslint/eslint/blob/main/lib/shared/ast-utils.js
 */

const lineBreakPattern = /\r\n|[\r\n\u2028\u2029]/u;

/**
 * Creates a version of the `lineBreakPattern` regex with the global flag.
 * Global regexes are mutable, so this needs to be a function instead of a constant.
 * @returns {RegExp} A global regular expression that matches line terminators
 */
export function createGlobalLinebreakMatcher()
{
	return new RegExp(lineBreakPattern.source, "gu");
}
