<template>
  <div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <ContentDoc /> -->
  </div>
</template>


<style>

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
  transition: all .5s cubic-bezier(.68, .07, .68, .97);
}

.page-enter-from,
.page-leave-to {
  transform: translateY(70px);
  opacity: 0;
  /* filter: blur(1rem); */

}
</style>