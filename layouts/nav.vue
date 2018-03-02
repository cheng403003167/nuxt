<template>
    <div v-cloak>
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/">首页</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="app">app页面</nuxt-link>
                </li>
                <li>
                    <nuxt-link to='home'>home页面</nuxt-link>
                </li>
                <li>
                    <nuxt-link to='users'>users</nuxt-link>
                </li>
            </ul>
        </nav>
        <nuxt/>
    </div>
</template>
<script>
    export default{
        head(){
            return{
            }
        }
    }
</script>