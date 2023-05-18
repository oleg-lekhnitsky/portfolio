
<template>



        
        <div class="wrapper desktop">
            <next style="position: absolute; right: 2vw; top: 1vw;"/>
            <h1 class="headline">(intro)</h1>
            <!-- <ContentDoc /> -->
            <h1>I design digital solutions for businesses combining my expertise in UX/UI design, front-end development and
                branding.
                <span style="color: var(--text-light);">I am passionate about creating user-centered products that solve
                    problems and make life a little better. </span>

            </h1>
            <p style=" font-size: large; letter-spacing: .03em ;margin-bottom: 2em;">Snippets from my previous projects. These are designed to leave you in awe and make you want to explore more, rather than leaving the website right away.</p>
            <div class="content-wrapper">

                    <!-- <nuxt-img format="webp" src="/0001.png" loading="lazy" quality="80" width="800" height="1000" /> -->
                    <video src="/sh.mp4" style="display: block ;width: 100%;  height: auto; background-color: var(--bg); border-radius: 1vw; aspect-ratio: 1.54700/1; clip-path: inset(1px 1px);" autoplay muted loop></video>
        
                
                <!-- <div class="half">
                    <nuxt-img class="half" format="webp" src="/0001.png" loading="lazy" quality="80" width="800"
                        height="1000" />
                </div> -->
            </div>
            
            <NuxtLink to="/contact" class="cta-hero">Contact</NuxtLink>
            <!-- <video src="/happy.mp4" autoplay muted loop></video> -->
        </div>

</template>
  
<style>

</style>


<style>
img {
    width: 50%;
    height: auto;
    /* aspect-ratio: 1; */
}
</style>