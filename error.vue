<template>
  <div style=" padding: 30px 20px;">
    <h1 style="font-size: calc(100vw*.333); line-height: 87%; text-align: center;">{{ error.statusCode }}</h1>
    <h1 style="text-align: center; width: 100%; position: relative;" v-if="error.statusCode === 404">
      {{ error.message }} 
    </h1>
    
    <h1 style="text-align: center;  position: relative;" v-else>An error occurred</h1>
    <NuxtLink to="/" class="cta-hero">Go home</NuxtLink>
  </div>
</template>

  <script>
    export default {
      props: ['error'],
      layout: 'error' // you can set a custom layout for the error page
    }
  </script>