const e = /\r\n|[\r\n\u2028\u2029]/u;

function createGlobalLinebreakMatcher() {
  return new RegExp(e.source, "gu");
}

function createRule(e, r) {
  return {
    ...e,
    rule: r
  };
}

function removeRegexClass(e, r) {
  if (!r) return e;
  const n = e.source.replace(r, "");
  return new RegExp(n, e.flags);
}

const r = /[\f\v\u0085\ufeff\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u202f\u205f\u3000\u2028\u2029]/u, n = /[\f\v\u0085\ufeff\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u202f\u205f\u3000]+/gmu, t = /[\u2028\u2029]/gmu, o = createGlobalLinebreakMatcher(), i = "noIrregularWhitespace", s = createRule({
  name: "no-irregular-whitespace-extra",
  configs: {
    recommended: [ "error", {
      skipComments: !0,
      skipStrings: !1,
      skipTemplates: !1,
      skipRegExps: !1,
      ignores: [ "　" ]
    } ]
  },
  messageId: i
}, {
  meta: {
    type: "problem",
    docs: {
      description: "disallow irregular whitespace",
      category: "Possible Errors",
      recommended: !0,
      url: "https://eslint.org/docs/rules/no-irregular-whitespace"
    },
    schema: [ {
      type: "object",
      properties: {
        skipComments: {
          type: "boolean",
          default: !1
        },
        skipStrings: {
          type: "boolean",
          default: !0
        },
        skipTemplates: {
          type: "boolean",
          default: !1
        },
        skipRegExps: {
          type: "boolean",
          default: !1
        },
        ignores: {
          type: "array",
          items: {
            type: "string"
          }
        }
      },
      additionalProperties: !1
    } ],
    messages: {
      [i]: "Irregular whitespace not allowed."
    }
  },
  defaultOptions: [ "error", {
    skipComments: !0,
    skipStrings: !1,
    skipTemplates: !1,
    skipRegExps: !1,
    ignores: []
  } ],
  create(e) {
    let s = [];
    const u = e.options[0] || {}, l = !!u.skipComments, a = !1 !== u.skipStrings, c = !!u.skipRegExps, p = !!u.skipTemplates, m = e.getSourceCode(), f = m.getAllComments(), g = function handleIgnoreRe(e) {
      if (!e || null == e || !e.length) return null;
      const r = e.map((e => {
        if ("\f" === e || "\\f" === e || "\\\\f" === e) return "\\\\f";
        if ("\v" === e || "\\v" === e || "\\\\v" === e) return "\\\\v";
        if (e.startsWith("\\\\u")) return e;
        if (1 === e.length) return `\\\\u${e.codePointAt(0).toString(16)}`;
        if (e.startsWith("\\\\")) return e;
        throw new TypeError(`${e} \\u${e.codePointAt(0).toString(16)}`);
      })).join("|");
      return new RegExp(r, "ug");
    }(u.ignores), d = removeRegexClass(r, g), h = removeRegexClass(n, g);
    function removeWhitespaceError(e) {
      const r = e.loc.start, n = e.loc.end;
      s = s.filter((({loc: {start: e}}) => e.line < r.line || e.line === r.line && e.column < r.column || e.line === n.line && e.column >= n.column || e.line > n.line));
    }
    function removeInvalidNodeErrorsInIdentifierOrLiteral(e) {
      const r = a && "string" == typeof e.value, n = c && Boolean(e.regex);
      (r || n) && d.test(e.raw) && removeWhitespaceError(e);
    }
    function removeInvalidNodeErrorsInComment(e) {
      d.test(e.value) && removeWhitespaceError(e);
    }
    function noop() {}
    const v = {};
    return d.test(m.getText()) ? (v.Program = function(e) {
      !function checkForIrregularWhitespace(e) {
        m.lines.forEach(((r, n) => {
          const t = n + 1;
          let o;
          for (;null !== (o = h.exec(r)); ) s.push({
            node: e,
            messageId: i,
            loc: {
              start: {
                line: t,
                column: o.index
              },
              end: {
                line: t,
                column: o.index + o[0].length
              }
            }
          });
        }));
      }(e), function checkForIrregularLineTerminators(e) {
        const r = m.getText(), n = m.lines, u = r.match(o);
        let l, a = -1;
        for (;null !== (l = t.exec(r)); ) {
          const r = u.indexOf(l[0], a + 1) || 0;
          s.push({
            node: e,
            messageId: i,
            loc: {
              start: {
                line: r + 1,
                column: n[r].length
              },
              end: {
                line: r + 2,
                column: 0
              }
            }
          }), a = r;
        }
      }(e);
    }, v.Identifier = removeInvalidNodeErrorsInIdentifierOrLiteral, v.Literal = removeInvalidNodeErrorsInIdentifierOrLiteral, 
    v.TemplateElement = p ? function removeInvalidNodeErrorsInTemplateLiteral(e) {
      "string" == typeof e.value.raw && d.test(e.value.raw) && removeWhitespaceError(e);
    } : noop, v["Program:exit"] = function() {
      l && f.forEach(removeInvalidNodeErrorsInComment), s.forEach((r => e.report(r)));
    }) : v.Program = noop, v;
  }
}), u = {
  [s.name]: s.rule
};

var l, a;

!function(e) {
  e.ERROR = "error", e.OFF = "off";
}(l || (l = {})), function(e) {
  e.PROBLEM = "problem";
}(a || (a = {}));

const c = {
  recommended: {
    plugins: [ "cjk" ],
    rules: {
      "no-irregular-whitespace": [ "off", {
        skipComments: !0,
        skipStrings: !1,
        skipTemplates: !1,
        skipRegExps: !1
      } ],
      "cjk/no-irregular-whitespace-extra": s.configs.recommended
    }
  }
};

export { c as configs, u as rules };
//# sourceMappingURL=index.esm.mjs.map
