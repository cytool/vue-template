<template lang="pug">
.input-item
    .label
        label(for='cy-phone') 电话号码
        span.tip(v-if='flag') {{ error }}

    input#cy-phone(
        :placeholder='placeholder',
        @blur='checkBlur',
        @input='inval',
        v-model='phone')
</template>

<script>
import { checkPhone } from '../../util/regex'
export default {
    name: 'cyPhone',
    props: {
        placeholder: {
            type: String,
            default: '请输入电话号码',
        },
        value: String,
        trigger: {
            // 事件触发后校验
            type: String,
            default: 'input', // blur
        },
    },
    data() {
        return {
            error: '', // 保存错误信息提示
            phone: '', // 保存手机号码
            flag: false, //  判断是否显示手机号码提示的错误信息
        }
    },
    methods: {
        inval(e) {
            this.flag = false

            // 默认input触发校验，因此需要先校验value的值在emit
            this.phone = e.target.value.replace(/[^\d]{1,}/giu, '')

            // v-model进行数据的双向绑定，内部是由@input和：value两部分组成，通过$emit将input事件发送到父组件中，触发@input
            this.$emit('input', this.phone)
        },
        checkBlur(e) {
            // 保存失去焦点时的手机号码
            const phone = e.target.value

            if (phone.length === 0) {
                this.flag = true
                this.error = '手机号码必填，请输入正确的手机号码！'
                return
            }

            if (!checkPhone(phone)) {
                this.flag = true
                this.error = '手机号码的格式不正确，请重新输入！'
            } else {
                this.flag = false
                this.error = ''
            }
        },
    },
}
</script>
