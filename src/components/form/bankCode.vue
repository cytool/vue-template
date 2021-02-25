<template lang="pug">
.input-item
    .label
        label(for='cy-bankCode') 银行卡号
        span.validateError(v-if='validateError') {{ errorTip }}

    input#cy-bankCode(
        :placeholder='placeholder',
        @blur='checkBlur',
        @input='inval',
        v-model='bankCode')
</template>

<script>
import { regRules, validateRules } from '../../util/regex'
export default {
    name: 'cyBankCode',
    props: {
        placeholder: {
            // input placeholder属性
            type: String,
            default: '请输入银行卡号',
        },
        value: String, //  父级v-model的值
        trigger: {
            // 触发校验的事件， 默认input （还有blur）
            type: String,
            default: 'input', // blur
        },
    },
    data() {
        return {
            bankCode: this.value, // 银行卡号
            validateError: false, // 验证错误（目前只做验证失败提示
        }
    },
    methods: {
        //
        /**
         * 将输入的银行卡号传递给父组件
         * @param {Object | Event} e Event对象
         * @return {void}
         */
        inval(e) {
            this.validateError = false

            if (this.trigger !== 'blur') {
                this.bankCode = e.target.value.replace(regRules.notNum, '')
            }

            this.$emit('input', this.bankCode)
        },

        /**
         * 失去焦点，验证银行卡号 => 决定是否显示验证失败提示语
         * @param {Object | Event} e Event对象
         * @return {void}
         */
        checkBlur(e) {
            const bankCode = e.target.value

            if (this.trigger !== 'blur') {
                if (!bankCode.length || bankCode.length !== 16) {
                    this.errorTip = '银行卡号位数不对'
                    this.validateError = true
                } else if (!validateRules.bankCode(bankCode)) {
                    this.errorTip = '银行卡号不正确'
                    this.validateError = true
                }
            }
        },
    },
}
</script>
