<template lang='pug'>
#cyForm
    p.txt 这里是Form页面

    phone(v-model='cyPhone')
    age(v-model='cyAge')

    p 打印 {{ cyPhone }}, {{ cyAge }}
</template>
<script>
import phone from '@/components/form/phone.vue'
import age from '@/components/form/age.vue'

export default {
    name: 'cyForm',
    components: { phone, age },

    data() {
        return { cyPhone: '', cyAge: '' }
    },
    methods() {},
}
</script>
<style lang='stylus' src='./index.styl'></style>
