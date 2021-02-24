<template lang='pug'>
#cyForm
    p.txt 这里是Form页面

    phone(v-model='cyPhone')
    age(trigger='blur', v-model='cyAge')
    idCode(v-model='cyIdCode')

    p 打印 {{ cyPhone }}, {{ cyAge }}, {{ cyIdCode }}
</template>
<script>
import phone from '@/components/form/phone.vue'
import age from '@/components/form/age.vue'
import idCode from '@/components/form/idCode.vue'

export default {
    name: 'cyForm',
    components: {
        phone,
        age,
        idCode,
    },

    data() {
        return {
            cyPhone: '123',
            cyAge: '',
            cyIdCode: '',
        }
    },
    methods() {},
}
</script>
<style lang='stylus' src='./index.styl'></style>
