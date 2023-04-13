<template>
  <div>
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <ContentDoc /> -->
  </div>
</template>


<style>

*{

}

html,
body {
  /* font-size: calc(100vw/65); */
  font-size: 15px;
  /* background-color: var(--bg); */
  color: var(--text);
  font-family: 'PP Neue Montreal', 'Arial Narrow', Arial, sans-serif;
  font-weight: 400;
  /* transition: background 1s ease, color 1.3s ease; */
}
/* .dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
} */

.page-enter-active,
.page-leave-active {
  transition: all .5s cubic-bezier(.68,.07,.68,.97);
}
.page-enter-from,
.page-leave-to {
  transform: translateY(70px);
  opacity: 0;
  /* filter: blur(1rem); */
  
}


</style>
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(93212273, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/93212273" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->