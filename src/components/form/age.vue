<template lang="pug">
.input-item
    .label
        label(for='cy-form-age') 年龄
        span.validateError(v-if='validateError') {{ errorTip }}

    input#cy-form-age(
        :placeholder='placeholder',
        @blur='checkAge',
        @input='inval',
        v-model='userAge')
</template>

<script>
import { regRules } from '../../util/regex'
import { errorTxt } from '../../util/words'
export default {
    name: 'cyFormAge',
    props: {
        placeholder: {
            type: String,
            default: '请输入年龄',
        },
        value: String,
        trigger: String,
    },
    data() {
        return {
            validateError: false,
            userAge: '', // 用户年龄
            errorTip: '', //  错误提示内容
        }
    },
    methods: {
        inval(e) {
            this.validateError = false
            this.errorTip = ''
            // 设置用户只能输入数字
            this.userAge = e.target.value.replace(regRules.notNum, '')
            this.$emit('input', this.userAge)
        },
        checkAge(e) {
            const userAge = e.target.value

            if (!userAge.length) {
                this.validateError = true
                this.errorTip = errorTxt.ageEmpty
            } else if (userAge.length > 3) {
                this.validateError = true
                this.errorTip = errorTxt.ageVerify
            }

            this.$emit('input', this.userAge)
        },
    },
}
</script>
