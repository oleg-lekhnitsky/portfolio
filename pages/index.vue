<template>
    <div class="wrapper desktop">
      <next style="position: absolute; right: 2vw; top: 1vw;" />
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
          muted loop playsinline autoplay
        ></video>
      </div>
  
      <NuxtLink to="/contact" class="cta-hero">Contact</NuxtLink>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const videoElement = document.getElementById('projectVideo');
  
      if (!isMobile) {
        videoElement.setAttribute('autoplay', true); // Apply the autoplay attribute for non-mobile devices
      }
    },
  };
  </script>
  
  <style>
  img {
    width: 50%;
    height: auto;
  }
  </style>
  