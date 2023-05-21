<template>
    <div class="wrapper">
        <div class="mobile"
            style="position: fixed; top: 0; right: -8px; z-index: 9999; padding: 1rem; font-size: 2rem; ">
            <nuxt-link class="mobile" style="font-size: 2rem; line-height: 50%; padding: 1rem ; border-radius: 20px;"
                to="/">×</nuxt-link>
        </div>
      <h1 class="headline">(BF)</h1>
      <h2 class="half xl">
        Giving a voice to local indie cinema and filmmakers.
        <span style="color: var(--text-light);">UX/UI design for independent online theater web app</span>
      </h2>
      <div class="half xl" style="margin-bottom: 2vw;">
        <h3>
          The goal was to create a seamless and engaging platform that caters to the needs of both filmmakers and cinema enthusiasts.
        </h3>
      </div>
      <div class="content-wrapper">
        <div
          class="half xl"
          style="box-shadow: 1px 20px 30px 0px rgba(0,0,0,0.14); -moz-box-shadow: 1px 20px 30px 0px rgba(0,0,0,0.14); border-radius: 2vw; overflow: hidden; margin-bottom: 2vw;"
        >
          <div
            ref="imageWrapper"
            class="image-wrapper"
            @mouseenter="stopImageScroll"
            @mouseleave="startImageScroll"
          >
            <nuxt-img
              format="webp"
              src="/bf-landing.png"
              loading="lazy"
              quality="100"
              width="1200"

              :options="{ width: '100%', height: '100%' }"
            />
          </div>
        </div>
      </div>
      <div class="half xl" style="margin-bottom: 2vw;">
        <p>
          The UI design is made in a way focused on presenting films in an appealing and immersive manner. High-quality visuals, including vibrant film shots and captivating imagery, were used to create an enticing film browsing experience.
        </p>
        <p>
          A dedicated section highlighting awards and showcasing the newest films was incorporated into the design. This section aimed to generate interest and provide an engaging experience for users. It showcased award-winning films, recent releases, and upcoming screenings, creating anticipation and fostering a sense of discovery.
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
    height: 30dvh;
    overflow-y: scroll;
  }
  }

  </style>
  