<template>
  <div class="wrapper">
    <div class="mobile" style="position: fixed; top: 0; right: -8px; z-index: 9999; padding: 1rem; font-size: 2rem; ">
      <nuxt-link class="mobile" style="font-size: 2rem; line-height: 50%; padding: 1rem ; border-radius: 20px;"
        to="/">×</nuxt-link>
    </div>
    <h1 class="headline">(PRA)</h1>
    <h2 class="">
      Pocket Rocket is a branding agency that works mostly with tech companies, startups, and telecom.
      <span style="color: var(--text-light);">UX/UI design for a corporate website.</span>
    </h2>
    <div class="half xl" style="margin-bottom: 2vw;">
      <h3>
        Our main objective was to develop a cutting-edge system that empowers agency designers to effortlessly create
        portfolio cases with ease. Our solution is built on flexible templates that seamlessly adapt to every screen size,
        ensuring the page looks impeccable on any device.
      </h3>
    </div>
    <div class="content-wrapper">
      <video id="projectVideo" src="/pra.mp4"
        style="width: 100%; height: auto; background-color: var(--bg); border-radius: 1vw; aspect-ratio: 16/9; clip-path: inset(1px 1px);"
        muted loop playsinline controls autoplay></video>
    </div>

    <div class="half xl" style="margin-bottom: 2vw;">
      <p>
        But we didn't stop there. Recognizing the fluid nature of design systems, we took on the challenge of creating a
        website that seamlessly integrates with our agency's ever-evolving aesthetic. Our team of talented designers and
        developers worked tirelessly to ensure that our corporate website could adapt to any changes in the design system
        effortlessly. In a couple of minutes, the entire look and feel of the website can be transformed to match the latest
        design iterations, reflecting our agency's commitment to staying at the forefront of design trends.
      </p>
      <p>
        We envisioned a journey for our visitors — a journey where they are immersed in the beauty of our work, where they can easily navigate through our portfolio cases, and where they feel inspired to connect with our agency. The intuitive user interface of our corporate website guides visitors through a seamless experience, showcasing our projects in a visually captivating manner. Each portfolio case tells a unique story, carefully curated to highlight our agency's expertise, creativity, and attention to detail.
      </p>
    </div>
  </div>
</template>
  
<script>
export default {
  mounted() {
    this.startImageScroll();
  },
  methods: {
    startImageScroll() {
      const imageWrapper = this.$refs.imageWrapper;

      if (imageWrapper) {
        this.scrollInterval = setInterval(() => {
          imageWrapper.scrollTop += 1; // Increase the scroll position by 1 pixel
          if (
            imageWrapper.scrollTop + imageWrapper.clientHeight >=
            imageWrapper.scrollHeight
          ) {
            imageWrapper.scrollTop = 0; // Reset scroll position when it reaches the bottom
          }
        }, 20); // Adjust the interval duration (in milliseconds) as needed for the desired scroll speed
      }
    },
    stopImageScroll() {
      clearInterval(this.scrollInterval); // Stop the scrolling interval
    },
  },
};
</script>
  
<style scoped>
.wrapper {
  /* Add your styles for the wrapper container here */
}

.content-wrapper {
  display: flex;
  margin-bottom: 2em;
}

.half {
  /* Add your styles for the half container here */
}

.image-wrapper {
  height: 70dvh;
  overflow-y: scroll;
}

h1 {
  /* Add your styles for the h1 element here */
}

@media screen and (max-width: 767px) {
  .image-wrapper {
    height: 40vh;
    overflow-y: scroll;
  }
}</style>
  