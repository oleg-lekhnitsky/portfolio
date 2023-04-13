<template>
  <div>
    <h1 style="font-size: calc(100vw*.333); line-height: 87%; text-align: center;">{{ error.statusCode }}</h1>
    <h1 style="text-align: center; width: 100%; position: relative;" v-if="error.statusCode === 404">
      {{ error.message }} 
    </h1>
    
    <h1 style="text-align: center; width: 90%; position: relative;" v-else>An error occurred</h1>
    <NuxtLink style="padding: 4rem; position: fixed; bottom: 0; border: solid 2px var(--text-light); width: 100%; text-align: center; border-radius: 60px; font-size: 2rem;"  to="/">Go home</NuxtLink>
  </div>
</template>

  <script>
    export default {
      props: ['error'],
      layout: 'error' // you can set a custom layout for the error page
    }
  </script>