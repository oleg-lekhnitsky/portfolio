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
                hid: 'og:image', property: 'og:image', content: '/og.png',
                
              },
              {property: 'og:image:height', content: '1200'},
              {property: 'og:image:width', content:'630'},
              {property: 'og:title', content: 'Oleg Lekhnitsky — UX/UI Designer. Portfolio'},
              {property: 'og:description', content:'I create user-centered digital solutions that help business grow and engage more people'},
              {property: 'og:site:name', content:'Oleg Lekhnitsky — UX/UI Designer'}

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
  

  