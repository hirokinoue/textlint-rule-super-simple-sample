# textlint-rule-super-simple-sample
「ハイ！」を検出するtextlintのルール

# textlint
https://github.com/textlint/textlint

# インストール
```
cd /path/to/textlint-intalled-directory
npm install /path/to/textlint-rule-super-simple-sample
```

# 使い方
`.textlintrc`に登録する方法
```
{
    "rules": {
        "super-simple-sample": true
    }
}
```
```
npx textlint README.md
```

CLIで実行する方法
```
npx textlint --rule super-simple-sample README.md
```