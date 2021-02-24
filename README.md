## 🎉  🎉  🎉 VUE空模板项目 🎉  🎉  🎉

### 编辑器必装插件

`vetur` / `eslint` /  `Manta's Stylus Supremacy` / [generator-vue-folder](https://github.com/cytool/generator-vue-folder)

------
### Vetur其他配置
在`vs Code编辑器`配置文件`setting.json`添加如下配置：
```js
{
    "vetur.format.options.tabSize": 4,
    "vetur.format.options.useTabs": false,
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "force-expand-multiline"
        },
        "prettyhtml": {
            "printWidth": 120,
            "singleQuote": true,
            "wrapAttributes": false,
            "sortAttributes": false
        }
    },
}

```

[更多vetur配置](https://vuejs.github.io/vetur/)

------
### 启用 eslint（代码格式化规范）
基于`recommended`官方推荐规则。查看目录`.eslintrc.js`

[eslint 中文文档](https://eslint.bootcss.com/)

------
### 配置 browserslist（样式兼容性）
查看目录`.browserslistrc`

[browserslist文档](https://github.com/browserslist/browserslist)

------
### 配置 pug format（基于vetur的书写风格）
查看目录`.prettierrc.js`

[更多pug格式化配置](https://github.com/prettier/plugin-pug)

------
### 配置 stylus format（基于vetur的书写风格）

- 在`vs Code编辑器`配置文件`setting.json`添加如下配置：(在JSON文件内提示`Unknown Configuration Setting`，请无视)
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

------
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



------

### 生成 CHANGELOG

全局安装`yarn global add conventional-changelog-cli`

用法查看目录`.husky`文件

[conventional-changelog更多介绍](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)
------
------
## 🎉  🎉  🎉 VUE空模板项目 - 项目组织 🎉  🎉  🎉



- 页面/组件组织方式 => 采用`文件夹`组织页面:

```js
src/
    views/
        home/ //=> 创建home页面
            index.vue //=> 页面，统一命名为index.vue
            _head.vue //=> 只服务于当前页面的组件，统一采用 _ 开头
            index.styl //=> 样式，统一命名为index.styl

        homeDetail/ //=> 创建home详情页面，采用驼峰命名法
            index.vue //=> 统一命名
            _shareBtn.vue //=> 只服务于当前页面的组件，统一采用 _ 开头
            index.styl //=> 统一命名  
```
__注意，样式文件要以`非scoped`形式引入。__ 因此需要注意起的类名不与其他页面冲突。

