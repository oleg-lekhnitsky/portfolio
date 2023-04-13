// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
       '@nuxt/content', '@nuxtjs/color-mode', '@nuxt/image-edge',
    ],
    image: {

    },


    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
          }
      },
    css: [
        // 'bulma',
        '/assets/styles/globals.scss', 
        '/assets/styles/_colors.scss',
        '/assets/styles/header.scss'
    ],
      
  })
  

  