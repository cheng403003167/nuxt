<template>
  <div>
    <h1>Hello World</h1>
    <nuxt-link to="home">to home</nuxt-link><br/>
    <nuxt-link to='app'>to app</nuxt-link><br/>
    <nuxt-link to="users">to users</nuxt-link>
  </div>
</template>
<script>
  export default{
    layout:'nav',
    head(){
        return {
        }
    },
  }
</script>
