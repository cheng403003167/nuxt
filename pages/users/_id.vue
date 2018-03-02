<template>
  <div class="ids">
      <br/><br/>
      这是用户{{ids}}
      <p v-if="oth">有oth参数{{oth}}</p>
      <br/>
      <nuxt-link to="/users">to users</nuxt-link>
  </div>
</template>
<script>
    export default{
        data(){
            return {
                ids:this.$route.params.id,
                oth:this.$route.params.oth,
            }
        },
        validate({params}){
            return /^\d+$/.test(params.id)
        },
        created(){
            this.checkUser();
        },
        transition:'test',
        middleware:'addua',
        methods:{
            checkUser(){
                // if(this.$route.params.id == 1){
                //     this.data.oth = this.$route.params.oth;
                // }
            }
        }
    }
</script>