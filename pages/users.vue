<template>
    <div class="userDiv">
        <p>这是用户顶层模块</p> 
        <nuxt-link to="/">to index</nuxt-link><br/>    
        <nuxt-child></nuxt-child>
    </div>
</template>
<script>
    export default{
        layout:'nav',
        head(){
        return {
            // link: [
            //   { rel: 'stylesheet', href: '/css/nav.css' },
            // ]
        }
    },
    }
</script>
<style scoped>
li{
    display: inline-block;
}
</style>
