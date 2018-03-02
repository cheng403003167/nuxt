const resolve = require('path').resolve;
module.exports = {
    /*
    ** Headers of the page
    */
    head: {
      title: 'Default title',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt.js project' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    /*
    ** Customize the progress bar color
    */
    build:{
    },
    loading: './components/loading.vue',
    css:['./assets/css/main.css'],
    router:{
      linkActiveClass:'active-link',
      extendRoutes(routes){
        routes.push({
          name:'custom',
          path:'*',
          component:resolve(__dirname,'pages/404.vue')
        })
      }
    },
    /*
    ** Build configuratio
    */
  }
  