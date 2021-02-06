### vue空模板项目

### 编辑器必装插件
`vetur` / `eslint`

### 启用 eslint（代码格式化规范）
基于`recommended`官方推荐规则。查看目录`.eslintrc.js`

[eslint 中文文档](https://eslint.bootcss.com/)
### 配置 browserslist（样式兼容性）
查看目录`.browserslistrc`
### 配置 pug format（基于vetur的书写风格）
查看目录`.prettierrc.js`
### 配置 stylus format（基于vetur的书写风格）

在`vs Code编辑器`配置文件`setting.json`添加如下配置：
```js
{
  "stylusSupremacy.insertBraces": false, // 不要括号
  "stylusSupremacy.insertColons": false, // 不要冒号
  "stylusSupremacy.insertSemicolons": false, // 不要分号
  "stylusSupremacy.sortProperties": "alphabetical", // 按字母顺序排序
  "stylusSupremacy.alwaysUseZeroWithoutUnit": true, // 0不带单位
  "stylusSupremacy.reduceMarginAndPaddingValues": true, // 合并margin/padding属性
  "stylusSupremacy.selectorSeparator": ", " // 多个class之间用 , 分割 => .a, #b
}
```
[更多stylus格式化配置](https://thisismanta.github.io/stylus-supremacy/#command-line)

### 启用 commitlint（提交规范）

git commit -m '[TYPE]: 超过5个字的本次commit说明'

```js
const COMMIT_TYPE = {
    'feat':     '新功能',
    'fix':      '修复',
    'docs':     '文档相关',
    'style':    '格式',
    'refactor': '重构(非feat、fix)',
    'revert':   '回滚',
    'build':    '构建相关',
    'test':     '测试',
    'ci':       '持续集成',
    'perf':     '性能',
    'chore':    '其他',
}
```

[commit提交约定](https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/)  / [commitlint type-enum](https://commitlint.js.org/#/reference-rules?id=type-enum)