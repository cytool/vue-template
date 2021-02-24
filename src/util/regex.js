
const regRules = {

    /**
     * 验证不是数字的规则
     */
    isNotNum: /[^\d]{1,}/igu,

    /**
     * 大陆手机号码规则
     */
    phone: /^1[3-9]\d{9}$/igu,

    /**
     * 身份证件号规则
     */
    idCode: /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/u,

}
const validateRules = {

    /**
     * 验证大陆手机号码
     * @param {string} phoneNum 电话号码
     * @return {boolean} 是否验证通过
     */
    phone: num => regRules.phone.test(num),

    /**
     * 验证身份证件号
     * @param {string} idCodeNum 身份证号
     * @return {boolean} 是否验证通过
     */
    idCode: idCodeNum => {
        // 加权因子
        const weightFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        // 校验码
        const checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
        const code = `${idCodeNum}`
        const last = idCodeNum.charAt(idCodeNum.length - 1) // 最后一位
        const seventeen = code.substring(0, 17) // ISO 7064:1983.MOD 11-2
        // 判断最后一位校验码是否正确
        const arr = seventeen.split('')
        const len = arr.length
        let num = 0

        for (let i = 0; i < len; i++) {
            num = num + arr[i] * weightFactor[i]
        }

        // 获取余数
        const resisue = num % 11
        const lastNo = checkCode[resisue] // 格式的正则
        // 正则思路
        /*
        第一位不可能是0
        第二位到第六位可以是0-9
        第七位到第十位是年份，所以七八位为19或者20
        十一位和十二位是月份，这两位是01-12之间的数值
        十三位和十四位是日期，是从01-31之间的数值
        十五，十六，十七都是数字0-9
        十八位可能是数字0-9，也可能是X
        */
        const idcardPatter = regRules.idCode // 判断格式是否正确
        const format = idcardPatter.test(idCodeNum)

        // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
        return Boolean(last === lastNo && format)
    },
}

export { regRules, validateRules }
