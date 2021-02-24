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

            if (this.trigger !== 'blur') {
                // 默认input触发校验，因此需要先校验value的值在emit
                this.phone = e.target.value.replace(/[^\d]{1,}/giu, '') // 不让用户输入除数字外的其它字符
                if (checkPhone(this.phone)) {
                    // v-model进行数据的双向绑定，内部是由@input和：value两部分组成，通过$emit将input事件发送到父组件中，触发@input
                    this.$emit('input', this.phone)
                }
            }
        },
        checkBlur(e) {
            // 保存失去焦点时的手机号码
            const phone = e.target.value

            if (phone.length === 0) {
                this.flag = true
                this.error = '手机号码必填，请输入正确的手机号码！'
                this.$emit('input', '') // 当用户第一次输入的数据正确后面改错时重置显示的内容
                return
            }

            if (phone.length !== 11) {
                this.flag = true
                this.error = '手机号码的位数不正确，请检查！'
                this.$emit('input', '') // 当用户第一次输入的数据正确后面改错时重置显示的内容
            }
        },
    },
}
</script>
