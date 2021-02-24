<template lang="pug">
.input-item
    .label
        label(for='cy-form-phone')
        span.tip(v-if='flag') {{ error }}

    input#cy-form-phone(
        :placeholder='placeholder',
        @blur='checkAge',
        @input='inval',
        v-model='userAge')
</template>

<script>
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
            flag: false,
            userAge: '', // 用户年龄
            error: '', //  错误提示
        }
    },
    methods: {
        inval(e) {
            this.flag = false
            this.error = ''
            // 设置用户只能输入数字
            this.userAge = e.target.value.replace(/[^\d]{1,}/giu, '')
        },
        checkAge(e) {
            if (e.target.value.length > 3) {
                this.flag = true
                this.error = '输入的年龄不正确，请重新输入'
                this.$emit('input', '') // 当用户第一次输入正确时第二次输入错误时将显示的数据重置
                return
            }

            this.$emit('input', this.userAge)
        },
    },
}
</script>
