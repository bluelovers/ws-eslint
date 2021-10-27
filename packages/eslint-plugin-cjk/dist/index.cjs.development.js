'use strict';

const lineBreakPattern = /\r\n|[\r\n\u2028\u2029]/u;
function createGlobalLinebreakMatcher() {
  return new RegExp(lineBreakPattern.source, "gu");
}

function createRule(meta, rule) {
  return { ...meta,
    rule
  };
}

const ALL_IRREGULARS = /[\f\v\u0085\ufeff\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u202f\u205f\u3000\u2028\u2029]/u;
const IRREGULAR_WHITESPACE = /[\f\v\u0085\ufeff\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u202f\u205f\u3000]+/mgu;
const IRREGULAR_LINE_TERMINATORS = /[\u2028\u2029]/mgu;
const LINE_BREAK = /*#__PURE__*/createGlobalLinebreakMatcher();
const noIrregularWhitespace = /*#__PURE__*/createRule({
  name: "no-irregular-whitespace-extra"
}, {
  meta: {
    type: "problem",
    docs: {
      description: "disallow irregular whitespace",
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
        }
      },
      additionalProperties: false
    }],
    messages: {
      noIrregularWhitespace: "Irregular whitespace not allowed."
    }
  },

  create(context) {
    let errors = [];
    const options = context.options[0] || {};
    const skipComments = !!options.skipComments;
    const skipStrings = options.skipStrings !== false;
    const skipRegExps = !!options.skipRegExps;
    const skipTemplates = !!options.skipTemplates;
    const sourceCode = context.getSourceCode();
    const commentNodes = sourceCode.getAllComments();

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
        if (ALL_IRREGULARS.test(node.raw)) {
          removeWhitespaceError(node);
        }
      }
    }

    function removeInvalidNodeErrorsInTemplateLiteral(node) {
      if (typeof node.value.raw === "string") {
        if (ALL_IRREGULARS.test(node.value.raw)) {
          removeWhitespaceError(node);
        }
      }
    }

    function removeInvalidNodeErrorsInComment(node) {
      if (ALL_IRREGULARS.test(node.value)) {
        removeWhitespaceError(node);
      }
    }

    function checkForIrregularWhitespace(node) {
      const sourceLines = sourceCode.lines;
      sourceLines.forEach((sourceLine, lineIndex) => {
        const lineNumber = lineIndex + 1;
        let match;

        while ((match = IRREGULAR_WHITESPACE.exec(sourceLine)) !== null) {
          errors.push({
            node,
            messageId: "noIrregularWhitespace",
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
          messageId: "noIrregularWhitespace",
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

    if (ALL_IRREGULARS.test(sourceCode.getText())) {
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

const config = {
  rules,
  configs: {
    recommended: {
      plugins: ["cjk"],
      rules: {
        "cjk/no-irregular-whitespace-extra": "error"
      }
    }
  }
};

exports.config = config;
exports['default'] = config;
//# sourceMappingURL=index.cjs.development.js.map
