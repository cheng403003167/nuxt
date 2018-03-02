<template>
  <div id="app">
      <h1>app page</h1>
      <nuxt-link to="home">to home</nuxt-link><br/>
      <nuxt-link to="/">to index</nuxt-link>
  </div>
</template>
<script>
    export default {
        name:'App',
        head(){
            return {
                title:'Title'
            }
        },
        layout:'nav'
    }
</script>