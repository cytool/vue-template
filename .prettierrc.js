module.exports = {
    trailingComma: "es5",
    tabWidth: 4, // 4个空格
    semi: false, // 分号
    singleQuote: true, // 单引号

    // 更多pug设置 => https://github.com/prettier/plugin-pug
    pugSortAttributes: 'asc', // 属性按升序排序
    pugWrapAttributesThreshold: 3, // 超过3个属性则每个属性独立一行(3+n行)
    pugClosingBracketPosition: 'last-line', // 尾括号)紧跟最后一个属性后面，不另起一行
}
