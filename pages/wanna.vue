<template>
    <div class="wrapper">
        <div class="mobile" style="position: fixed; top: 0; right: -8px; z-index: 9999; padding: 1rem; font-size: 2rem; ">
            <nuxt-link class="mobile" style="font-size: 2rem; line-height: 50%; padding: 1rem ; border-radius: 20px;"
                to="/">×</nuxt-link>
        </div>
        <h1 class="headline">(wanna)</h1>
        <h2>
            Wanna (Farfetch group) is a fashion-tech company that develops AR technologies for marketplaces.
            Launching new 3D viewer for bags: <span style="color: var(--text-light);">UX/UI design for the product
                page</span>
        </h2>
        <p class="half xl">The brand new 3D viewer is a technology that businesses can integrate into their web app or iOS
            app, to showcase bags in a 3D format.
        </p>
        <p class="half xl">The main goal of this page was to provide potential clients with a seamless experience of trying out the 3D viewer with minimal steps. By implementing an intuitive user interface and streamlining the user journey, I aimed to showcase the benefits and advantages of utilizing this cutting-edge technology.
        </p>
        <div class="content-wrapper">
            <div class="half xl" style="border-radius: 2vw; overflow: hidden;">
                <div ref="imageWrapper" class="image-wrapper" @mouseenter="stopImageScroll" @mouseleave="startImageScroll">
                    <nuxt-img ref="image" format="webp" src="/wanna-bags.jpg" loading="lazy" quality="100" width="1200"
                        style="min-height: 1200px;" />
                </div>
            </div>

        </div>
        <p class="half xl">Additionally, I enhanced the user experience by incorporating success stories and a comprehensive list of companies that have already embraced and implemented the 3D viewer technology. This not only helps build trust and credibility but also allows potential clients to see real-world examples of the technology's effectiveness and its positive impact on businesses within the industry.
        </p>
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
    height: 70vh;
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
}
</style>
  