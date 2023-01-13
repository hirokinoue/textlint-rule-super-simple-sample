import TextLintTester from "textlint-tester";
import rule from "../src/super-simple-sample";

const tester = new TextLintTester();

tester.run("super-simple-sample", rule, {
    valid: [
        // 不一致
        "最高に",
        // 部分一致
        "ハイ"
    ],
    invalid: [
        {
            text: "最高に「ハイ！」ってやつだ",
            errors: [
                {
                    message: "ハイ！ was detected in '最高に「ハイ！」ってやつだ'",
                    line: 1,
                    column: 5
                }
            ]
        },
        {
            text: "# ハイ！",
            errors: [
                {
                    message: "ハイ！ was detected in 'ハイ！'",
                    line: 1,
                    column: 3
                }
            ]
        },
        {
            text: "- ハイ！",
            errors: [
                {
                    message: "ハイ！ was detected in 'ハイ！'",
                    line: 1,
                    column: 3
                }
            ]
        },
        {
            text: "[ハイ！](http://example.com)",
            errors: [
                {
                    message: "ハイ！ was detected in 'ハイ！'",
                    line: 1,
                    column: 2
                }
            ]
        }
    ]
});