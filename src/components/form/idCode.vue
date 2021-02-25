<template lang="pug">
.input-item
    .label
        label(for='cy-idCode') 身份证
        span.validateError(v-if='validateError') {{ errorTip }}

    input#cy-idCode(
        :placeholder='placeholder',
        @blur='checkBlur',
        @input='inval',
        v-model='idCode')
</template>

<script>
import { validateRules } from '../../util/regex'
export default {
    name: 'cyIdCode',
    props: {
        placeholder: {
            // input placeholder属性
            type: String,
            default: '请输入身份证号码',
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
            idCode: this.value, // 身份证号
            validateError: false, // 验证错误（目前只做验证失败提示
            errorTip: '', // 验证错误提示的内容
        }
    },
    methods: {
        //
        /**
         * 实时验证身份证号码 => 限制可输入的范围只能为数字
         * @param {Object | Event} e Event对象
         * @return {void}
         */
        inval(e) {
            this.validateError = false
            if (this.trigger !== 'blur') {
            }

            this.$emit('input', this.idCode)
        },

        /**
         * 失去焦点，验证身份证号 => 决定是否显示验证失败提示语
         * @param {Object | Event} e Event对象
         * @return {void}
         */
        checkBlur(e) {
            const idCode = e.target.value

            if (this.trigger !== 'blur') {
                // 当身份证号长度不对或者不符合身份证号规则
                if (!idCode.length || idCode.length !== 18) {
                    this.errorTip = '输入的身份证号位数错误'
                    this.validateError = true
                } else if (!validateRules.idCode(idCode)) {
                    this.errorTip = '输入的身份证号不正确'
                    this.validateError = true
                }
            }
        },
    },
}
</script>
