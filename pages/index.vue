<template>
  <div class="wrapper desktop">
    <next style="position: absolute; right: 2vw; top: 1vw;"></next>
    <h1 class="headline">(intro)</h1>

    <h1>
      I design digital solutions for businesses combining my expertise in UX/UI design, front-end development, and branding.
      <span style="color: var(--text-light);">
        I am passionate about creating user-centered products that solve problems and make life a little better.
      </span>
    </h1>

    <p style="font-size: large; letter-spacing: .03em; margin-bottom: 2em;">
      Snippets from my previous projects. These are designed to leave you in awe and make you want to explore more,
      rather than leaving the website right away.
    </p>

    <div class="content-wrapper">
      <video
        id="projectVideo"
        src="/sh.mp4"
        style="width: 100%; height: auto; background-color: var(--bg); border-radius: 1vw; aspect-ratio: 1.54700/1; clip-path: inset(1px 1px);"
        loop playsinline
        :autoplay="isDesktop"
      ></video>
    </div>

    <NuxtLink to="/contact" class="cta-hero">Contact</NuxtLink>
  </div>
</template>

<script>
export default {
  computed: {
    isDesktop() {
      return !/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
  },
};
</script>

<style>
img {
  width: 50%;
  height: auto;
}
</style>
