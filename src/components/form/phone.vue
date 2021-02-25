<template lang="pug">
.input-item
    .label
        label(for='cy-phone') 电话号码
        span.validateError(v-if='validateError') {{ errorTip }}

    input#cy-phone(
        :placeholder='placeholder',
        @blur='checkBlur',
        @input='inval',
        v-model='phone')
</template>

<script>
import { regRules, validateRules } from '../../util/regex'
export default {
    name: 'cyPhone',
    props: {
        placeholder: {
            // input placeholder属性
            type: String,
            default: '请输入电话号码',
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
            phone: this.value, // 手机号码
            validateError: false, // 验证错误（目前只做验证失败提示
            errorTip: '', // 验证错误提示的内容
        }
    },
    methods: {
        //
        /**
         * 实时验证手机号 => 限制可输入的范围只能为数字
         * @param {Object | Event} e Event对象
         * @return {void}
         */
        inval(e) {
            this.validateError = false
            if (this.trigger !== 'blur') {
                this.phone = e.target.value.replace(regRules.notNum, '') // 不让用户输入除数字外的其它字符
            }

            this.$emit('input', this.phone)
        },

        /**
         * 失去焦点，验证手机号 => 决定是否显示验证失败提示语
         * @param {Object | Event} e Event对象
         * @return {void}
         */
        checkBlur(e) {
            const phone = e.target.value

            if (this.trigger !== 'blur') {
                if (!phone.length || phone.length !== 11) {
                    this.errorTip = '手机号码位数错误'
                    this.validateError = true
                } else if (!validateRules.phone(phone)) {
                    this.errorTip = '手机号码错误'
                    this.validateError = true
                }
            }
        },
    },
}
</script>
