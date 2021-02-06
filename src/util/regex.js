
/**
 * 验证大陆手机号码
 * @param {nubmer | string} phoneNum 电话号码
 * @return {boolean} 是否验证通过
 */
const checkPhone = phoneNum => /^1\d{10}$/igu.test(phoneNum)

export { checkPhone }
