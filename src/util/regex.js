
const regRules = {

    /**
     * 大陆手机号码规则
     */
    phone: /^1[3-9]\d{9}$/igu,
}
const validateRules = {

    /**
     * 验证大陆手机号码
     * @param {string} phoneNum 电话号码
     * @return {boolean} 是否验证通过
     */
    phone: num => regRules.phone.test(num),
}

export { regRules, validateRules }
