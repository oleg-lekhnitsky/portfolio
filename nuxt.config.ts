// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content', '@nuxtjs/color-mode', '@nuxt/image-edge', '@nuxtjs/fontaine',
  ],
  image: {

  },

  plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],


  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Oleg Lekhnitsky — UX/UI Designer. Portfolio',
      meta: [
        {
          name: 'I create user-centered digital solutions that help business grow and engage more people',
          property: 'og:image', content: 'https://portfolio-liard-ten-39.vercel.app/og.png',

        },
        { property: 'og:image:url', content: 'https://portfolio-liard-ten-39.vercel.app/og.png' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:height', content: '1200' },
        { property: 'og:image:width', content: '630' },
        { property: 'og:title', content: 'Oleg Lekhnitsky — UX/UI Designer. Portfolio' },
        { property: 'og:description', content: 'I create user-centered digital solutions that help business grow and engage more people' },
        { property: 'og:site:name', content: 'Oleg Lekhnitsky — UX/UI Designer' },
        { name: 'author', content: 'Oleg Lekhnitsky' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://portfolio-liard-ten-39.vercel.app/og.png' },
        { property: 'og:type', content: 'website' },

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
    '/assets/styles/header.scss',
    '/assets/styles/about.scss'
  ],


})


