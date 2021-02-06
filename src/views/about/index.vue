<template lang="pug">
#about
    p 这里是About页面
</template>

<script>
const td = { a: 1 }
const arr = [1, 2, 3, 4, 5, 5, 5, 6, 7]

export default {
    name: 'about',
    data() {
        return {
            td,
            arr,
            a: 2,
        }
    },
}
</script>

<style lang="stylus" src='./index.styl'></style>
