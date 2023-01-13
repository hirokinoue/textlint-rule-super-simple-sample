"use strict";

/**
 * @param {RuleContext} context
 */
export default function (context) {
    const {Syntax, getSource, RuleError, report} = context;
    return {
        [Syntax.Str](node) {
            const text = getSource(node);
            const match = text.match(/ハイ！/i);
            if (match) {
                report(node, new RuleError(`ハイ！ was detected in '${text}'`, {
                    index: match.index
                }));
            }
        }
    };
}