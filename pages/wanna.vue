<template>
    <div class="wrapper">
        <div class="mobile" style="position: sticky; top: 0; z-index: 9999;  width: 100%; justify-content: space-between;  padding: 16px 8px ;">
            <nuxt-link class="mobile" style="font-size: 1.25rem; padding: 1rem 1.5rem;  border-radius: 20px;"
                to="/">Home</nuxt-link>
            <nuxt-link class="mobile"  style="font-size: 1.25rem; padding: 1rem 1.5rem; border-radius: 20px; "
                to="/">Next Case</nuxt-link>
        </div>
        <h1 class="headline">(wanna)</h1>
        <h1>Wanna (Farfetch group) is a fashion-tech company that develops AR technologies for marketplaces: launching new 3D viewer for bags. <span style="color: var(--text-light);">UX/UI design
                of product page</span></h1>
                <p class="half xl">Wanna (Farfetch group) is a fashion-tech company that develops AR technologies for marketplaces</p>
        <div class="content-wrapper">

            <div class="half xl" style="border-radius: 2vw; overflow: hidden;">

                <div
            ref="imageWrapper"
            class="image-wrapper"
            @mouseenter="stopImageScroll"
            @mouseleave="startImageScroll"
          >
            <nuxt-img
              ref="image"
              format="webp"
              src="/wanna-bags.jpg"
              loading="lazy"
              quality="100"
              width="1200"
              style="min-height: 1200px;"
            />
          </div>
            </div>
            <div class="half s" style="padding-left: 2rem;">
                <h3>UX/UI Design for online theater</h3>
            </div>

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