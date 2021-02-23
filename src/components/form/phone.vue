<template lang="pug">
.input-item
    label(for='cy-phone') 电话号码
    input#cy-phone(:placeholder='placeholder', @input='inval')
</template>

<script>
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
            default: 'input',
        },
    },
    data() {
        return {}
    },
    methods: {
        inval(e) {
            // 默认input触发校验，因此需要先校验value的值在emit
            this.$emit('input', e.target.value)
        },
    },
}
</script>
