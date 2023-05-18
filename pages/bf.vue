<template>
    <div class="wrapper">
      <h1 class="headline">(BF)</h1>
      <h1 class="half xl">
        Giving a voice to local indie cinema and filmmakers.
        <span style="color: var(--text-light);">UX/UI design for independent online theater web app</span>
      </h1>
      <div class="half xl" style="margin-bottom: 2vw;">
        <h3>
          The goal was to create a seamless and engaging platform that caters to the needs of both filmmakers and cinema enthusiasts.
        </h3>
      </div>
      <div class="content-wrapper">
        <div
          class="half xl"
          style="box-shadow: 1px 20px 30px 0px rgba(0,0,0,0.14); -moz-box-shadow: 1px 20px 30x 0px rgba(0,0,0,0.14); border-radius: 2vw; overflow: hidden; margin-bottom: 2vw;"
        >
          <div
            ref="imageWrapper"
            class="image-wrapper"
            @mouseenter="stopImageScroll"
            @mouseleave="startImageScroll"
          >
            <nuxt-img
              ref="image"
              format="webp"
              src="/bf-landing.png"
              loading="lazy"
              quality="100"
              width="1200"
              style="min-height: 1200px;"
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
        this.scrollInterval = setInterval(() => {
          const imageWrapper = this.$refs.imageWrapper;
          const imageElement = this.$refs.image.$el;
  
          imageWrapper.scrollTop += 1; // Increase the scroll position by 1 pixel
          if (
            imageWrapper.scrollTop + imageWrapper.clientHeight >=
            imageElement.offsetHeight
          ) {
            imageWrapper.scrollTop = 0; // Reset scroll position when it reaches the bottom
          }
        }, 20); // Adjust the interval duration (in milliseconds) as needed for the desired scroll speed
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
    height: 70vh;
    overflow-y: scroll;
  }
  
  h1 {
    /* Add your styles for the h1 element here */
  }
  
  h3,
  p {
    /* Add your styles for the h3 element here */
    font-size: calc(var(--widthA) / 55);
    margin-bottom: 1vw;
  }
  </style>
  