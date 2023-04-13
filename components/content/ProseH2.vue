<template>
    <h2 :id="id">
      <h2 v-if="id && generate" :href="`#${id}`">
        <slot />
      </h2>
      <slot v-else />
    </h2>
  </template>
  
  <script setup lang="ts">
  import { useRuntimeConfig } from '#imports'
  defineProps<{ id?: string }>()
  const heading = 2
  const { anchorLinks } = useRuntimeConfig().public.content
  const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
  </script>