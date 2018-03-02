<template>
  <div id="page">
      <h1>Home Page</h1>
      <router-link to="app">to app</router-link><br/>
      <nuxt-link to="/">to index</nuxt-link>
  </div>
</template>
<script>
    export default {
        name:'Home',
        head(){
            return {
                title:'home page',
                htmlAttrs:{
                    foo:'bar'
                },
                bodyAttrs:{
                    bar:'gaz'
                },
                base:{ target:'_blank',href:"/"},
                link:[
                    {rel:'favicon',href:"favicon.ico"}
                ]
            }
        },
        layout:'nav'
    }
</script>
