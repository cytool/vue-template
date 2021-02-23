<template lang="pug">
.input-item
    label(for='cy-form-phone')
    input#cy-form-phone(:placeholder='placeholder', @input='inval')
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
        return {}
    },
    methods: {
        inval(e) {
            this.$emit('input', e.target.value)
        },
    },
}
</script>
