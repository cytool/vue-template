🎉  🎉  🎉 VUE空模板项目 🎉  🎉  🎉
------

- 采用`约定方式`来组织Vue的项目结构工程。
- 集成/启用项目开发的其他`工程化配置`（如启用统一的代码风格Eslint、约定的缩进方式等...）

-----
### Vue工程目录

```yaml
src/views/ # 页面全部在此文件夹下
    homeDetail/ # 创建home详情页面，采用驼峰命名法
        index.vue # 统一命名
        _shareBtn.vue # 只服务于当前页面的组件，统一采用 _ 开头
        index.styl # 统一命名  
```
__注意，样式文件要以`非scoped`形式引入。__ 因此需要注意起的类名不与其他页面冲突。

------
- #### 统一的页面组织方式: 

    1. 一个页面一个文件夹，且样式文件需要独立为文件
    2. 页面统一放置在`src/views/`目录下
    3. 页面级别的组件(非全局通用组件)统一放在当前文件夹下，且以 `_` 开头

    此部分工作由 [vscode插件 - 自动生成Vue项目的页面目录](https://github.com/cytool/generator-vue-folder) 快捷完成。

- #### 统一的命名风格:

    1. 采用驼峰命名法
     

- #### 统一的语法/书写风格

    1. 安装`VS Code`扩展 ➡ `vetur` / `eslint` /  `Manta's Stylus Supremacy` / 

    2. `pug` ➡ 查看`/.prettierrc.js`文件中关于`pug开头`部分

    3.  `stylus` ➡ 在`VS Code`配置文件`setting.json`添加如下配置：

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
    4. `javascript` ➡️  查看`/.eslintrc.js`文件

- #### 统一的Git提交规范
    1. `git commit -m '[COMMIT_TYPE]: 超过5个字的本次commit说明'`

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


- #### 其他
    1. 生成CHANGELOG.md

        1. 全局安装`yarn global add conventional-changelog-cli`
        2. 使用查看`/.husky`文件

------
### 参考

- [vetur配置](https://vuejs.github.io/vetur/)
- [eslint 中文文档](https://eslint.bootcss.com/)
- [browserslist文档](https://github.com/browserslist/browserslist)
- [pug格式化配置](https://github.com/prettier/plugin-pug)
- [stylus格式化配置](https://thisismanta.github.io/stylus-supremacy/)
- [commit提交约定](https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/)
- [commitlint type-enum](https://commitlint.js.org/#/reference-rules?id=type-enum)
- [conventional-changelog文档](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)