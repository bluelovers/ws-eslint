const lineBreakPattern = /\r\n|[\r\n\u2028\u2029]/u;
function createGlobalLinebreakMatcher() {
  return new RegExp(lineBreakPattern.source, "gu");
}

function createRule(meta, rule) {
  return { ...meta,
    rule
  };
}

function removeRegexClass(re, ignoresRe) {
  if (!ignoresRe) {
    return re;
  }

  const source = re.source.replace(ignoresRe, "");
  return new RegExp(source, re.flags);
}
function handleIgnoreRe(ignores) {
  if (!ignores || !(ignores !== null && ignores !== void 0 && ignores.length)) {
    return null;
  }

  const source = ignores.map(c => {
    if (c === "\f" || c === "\\f" || c === "\\\\f") {
      return "\\\\f";
    } else if (c === "\v" || c === "\\v" || c === "\\\\v") {
      return "\\\\v";
    } else if (c.startsWith("\\\\u")) {
      return c;
    } else if (c.length === 1) {
      return `\\\\u${c.codePointAt(0).toString(16)}`;
    } else if (c.startsWith("\\\\")) {
      return c;
    }

    throw new TypeError(`${c} \\u${c.codePointAt(0).toString(16)}`);
  }).join("|");
  return new RegExp(source, "ug");
}

const ALL_IRREGULARS = /[\f\v\u0085\ufeff\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u202f\u205f\u3000\u2028\u2029]/u;
const IRREGULAR_WHITESPACE = /[\f\v\u0085\ufeff\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u202f\u205f\u3000]+/mgu;
const IRREGULAR_LINE_TERMINATORS = /[\u2028\u2029]/mgu;
const LINE_BREAK = /*#__PURE__*/createGlobalLinebreakMatcher();
const ERROR_MESSAGE = "Irregular whitespace not allowed.";
const MESSAGE_ID = "noIrregularWhitespace";
const noIrregularWhitespace = /*#__PURE__*/createRule({
  name: "no-irregular-whitespace-extra",
  configs: {
    recommended: ["error", {
      "skipComments": true,
      "skipStrings": false,
      "skipTemplates": false,
      "skipRegExps": false,
      "ignores": ['\u3000']
    }]
  },
  messageId: MESSAGE_ID
}, {
  meta: {
    type: "problem",
    docs: {
      description: "disallow irregular whitespace",
      category: "Possible Errors",
      recommended: true,
      url: "https://eslint.org/docs/rules/no-irregular-whitespace"
    },
    schema: [{
      type: "object",
      properties: {
        skipComments: {
          type: "boolean",
          default: false
        },
        skipStrings: {
          type: "boolean",
          default: true
        },
        skipTemplates: {
          type: "boolean",
          default: false
        },
        skipRegExps: {
          type: "boolean",
          default: false
        },
        ignores: {
          type: "array",
          items: {
            type: "string"
          }
        }
      },
      additionalProperties: false
    }],
    messages: {
      [MESSAGE_ID]: ERROR_MESSAGE
    }
  },
  defaultOptions: ["error", {
    "skipComments": true,
    "skipStrings": false,
    "skipTemplates": false,
    "skipRegExps": false,
    ignores: []
  }],

  create(context) {
    let errors = [];
    const options = context.options[0] || {};
    const skipComments = !!options.skipComments;
    const skipStrings = options.skipStrings !== false;
    const skipRegExps = !!options.skipRegExps;
    const skipTemplates = !!options.skipTemplates;
    const sourceCode = context.getSourceCode();
    const commentNodes = sourceCode.getAllComments();
    const ignoresRe = handleIgnoreRe(options.ignores);
    const ALL_IRREGULARS_LOCAL = removeRegexClass(ALL_IRREGULARS, ignoresRe);
    const IRREGULAR_WHITESPACE_LOCAL = removeRegexClass(IRREGULAR_WHITESPACE, ignoresRe);

    function removeWhitespaceError(node) {
      const locStart = node.loc.start;
      const locEnd = node.loc.end;
      errors = errors.filter(({
        loc: {
          start: errorLocStart
        }
      }) => errorLocStart.line < locStart.line || errorLocStart.line === locStart.line && errorLocStart.column < locStart.column || errorLocStart.line === locEnd.line && errorLocStart.column >= locEnd.column || errorLocStart.line > locEnd.line);
    }

    function removeInvalidNodeErrorsInIdentifierOrLiteral(node) {
      const shouldCheckStrings = skipStrings && typeof node.value === "string";
      const shouldCheckRegExps = skipRegExps && Boolean(node.regex);

      if (shouldCheckStrings || shouldCheckRegExps) {
        if (ALL_IRREGULARS_LOCAL.test(node.raw)) {
          removeWhitespaceError(node);
        }
      }
    }

    function removeInvalidNodeErrorsInTemplateLiteral(node) {
      if (typeof node.value.raw === "string") {
        if (ALL_IRREGULARS_LOCAL.test(node.value.raw)) {
          removeWhitespaceError(node);
        }
      }
    }

    function removeInvalidNodeErrorsInComment(node) {
      if (ALL_IRREGULARS_LOCAL.test(node.value)) {
        removeWhitespaceError(node);
      }
    }

    function checkForIrregularWhitespace(node) {
      const sourceLines = sourceCode.lines;
      sourceLines.forEach((sourceLine, lineIndex) => {
        const lineNumber = lineIndex + 1;
        let match;

        while ((match = IRREGULAR_WHITESPACE_LOCAL.exec(sourceLine)) !== null) {
          errors.push({
            node,
            messageId: MESSAGE_ID,
            loc: {
              start: {
                line: lineNumber,
                column: match.index
              },
              end: {
                line: lineNumber,
                column: match.index + match[0].length
              }
            }
          });
        }
      });
    }

    function checkForIrregularLineTerminators(node) {
      const source = sourceCode.getText(),
            sourceLines = sourceCode.lines,
            linebreaks = source.match(LINE_BREAK);
      let lastLineIndex = -1,
          match;

      while ((match = IRREGULAR_LINE_TERMINATORS.exec(source)) !== null) {
        const lineIndex = linebreaks.indexOf(match[0], lastLineIndex + 1) || 0;
        errors.push({
          node,
          messageId: MESSAGE_ID,
          loc: {
            start: {
              line: lineIndex + 1,
              column: sourceLines[lineIndex].length
            },
            end: {
              line: lineIndex + 2,
              column: 0
            }
          }
        });
        lastLineIndex = lineIndex;
      }
    }

    function noop() {}

    const nodes = {};

    if (ALL_IRREGULARS_LOCAL.test(sourceCode.getText())) {
      nodes.Program = function (node) {
        checkForIrregularWhitespace(node);
        checkForIrregularLineTerminators(node);
      };

      nodes.Identifier = removeInvalidNodeErrorsInIdentifierOrLiteral;
      nodes.Literal = removeInvalidNodeErrorsInIdentifierOrLiteral;
      nodes.TemplateElement = skipTemplates ? removeInvalidNodeErrorsInTemplateLiteral : noop;

      nodes["Program:exit"] = function () {
        if (skipComments) {
          commentNodes.forEach(removeInvalidNodeErrorsInComment);
        }

        errors.forEach(error => context.report(error));
      };
    } else {
      nodes.Program = noop;
    }

    return nodes;
  }

});

const rules = {
  [noIrregularWhitespace.name]: noIrregularWhitespace.rule
};

const PLUGIN_NAME = 'cjk';
var ESLINT_SWITCH;

(function (ESLINT_SWITCH) {
  ESLINT_SWITCH["ERROR"] = "error";
  ESLINT_SWITCH["OFF"] = "off";
})(ESLINT_SWITCH || (ESLINT_SWITCH = {}));

var ESLINT_META_TYPE;

(function (ESLINT_META_TYPE) {
  ESLINT_META_TYPE["PROBLEM"] = "problem";
})(ESLINT_META_TYPE || (ESLINT_META_TYPE = {}));

const configs = {
  recommended: {
    plugins: [PLUGIN_NAME],
    rules: {
      "no-irregular-whitespace": ["off", {
        "skipComments": true,
        "skipStrings": false,
        "skipTemplates": false,
        "skipRegExps": false
      }],
      [`${PLUGIN_NAME}/no-irregular-whitespace-extra`]: noIrregularWhitespace.configs.recommended
    }
  }
};

export { configs, rules };
//# sourceMappingURL=index.esm.mjs.map
