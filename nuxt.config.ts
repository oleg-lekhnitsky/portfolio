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
            title: 'Oleg Lekhnitsky — UX/UI Designer. Portfolio',
            meta:[
              {
                name: 'I create user-centered digital solutions that help business grow and engage more people',
                hid: 'og:image', property: 'og:image', content: '/0001.png', 
                
              }
            ],
            htmlAttrs: {
              lang: 'en',
            }
          }
      },
    css: [
        // 'bulma',
        '/assets/styles/globals.scss', 
        '/assets/styles/_colors.scss',
        '/assets/styles/header.scss'
    ],
    
      
  })
  

  