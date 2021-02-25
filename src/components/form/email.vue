<template lang="pug">
.input-item
    .label
        label(for='cy-email') 电子邮箱
        span.validateError(v-if='validateError') 输入的电子邮箱格式不正确

    input#cy-email(
        :placeholder='placeholder',
        @blur='checkBlur',
        @input='inval',
        v-model='email')
</template>

<script>
import { validateRules } from '../../util/regex'
export default {
    name: 'cyEmail',
    props: {
        placeholder: {
            // input placeholder属性
            type: String,
            default: '请输入电子邮箱',
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
            email: this.value, // 邮箱号
            validateError: false, // 验证错误（目前只做验证失败提示
        }
    },
    methods: {
        //
        /**
         * 将输入的邮箱号传递给父组件
         * @param {Object | Event} e Event对象
         * @return {void}
         */
        inval(e) {
            this.validateError = false

            if (this.trigger === 'blur') {
                this.email = e.target.value
            }

            this.$emit('input', this.email)
        },

        /**
         * 失去焦点，验证邮箱号 => 决定是否显示验证失败提示语
         * @param {Object | Event} e Event对象
         * @return {void}
         */
        checkBlur(e) {
            if (this.trigger === 'blur' && !validateRules.email(this.email)) {
                this.validateError = true
            }
        },
    },
}
</script>
