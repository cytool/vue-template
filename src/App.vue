<template lang="pug">
#entry
    #nav
        router-link(to='/') home
        router-link(to='/about') About
    #router-view
</template>

<style lang="stylus" src="stylus/reset.styl"></style>
