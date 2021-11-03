/**
 * remove regexp in ignores
 * @private
 */
export function removeRegexClass(re: RegExp, ignoresRe: RegExp): RegExp
{
	if (!ignoresRe)
	{
		return re;
	}

	const source = re.source.replace(ignoresRe, "");

	return new RegExp(source, re.flags);
}

export function handleIgnoreRe(ignores: string[]): RegExp
{
	if (!ignores || !ignores?.length)
	{
		return null;
	}

	const source = ignores
		.map(c =>
		{
			if (c === "\f" || c === "\\f" || c === "\\\\f")
			{
				return "\\\\f";
			}
			else if (c === "\v" || c === "\\v" || c === "\\\\v")
			{
				return "\\\\v";
			}
			else if (c.startsWith("\\\\u"))
			{
				return c;
			}
			else if (c.length === 1)
			{
				return `\\\\u${c.codePointAt(0).toString(16)}`;
			}
			else if (c.startsWith("\\\\"))
			{
				return c;
			}

			throw new TypeError(`${c} \\u${c.codePointAt(0).toString(16)}`);
		})
		.join("|")
	;

	return new RegExp(source, "ug");
}
