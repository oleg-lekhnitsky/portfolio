<template>
    <div class="wrapper">
        <div class="mobile" style="position: sticky; top: 0; z-index: 9999; display: flex ; width: 100%; justify-content: space-between;  background-color: var(--bg); padding: .25rem .75rem ">
            <nuxt-link class="mobile" style="font-size: 2rem;"
                to="/symfa">←</nuxt-link>
            <nuxt-link class="mobile"  style="font-size: 2rem;"
                to="/">×</nuxt-link>
            <nuxt-link class="mobile"  style="font-size: 2rem;"
                to="/">→</nuxt-link>
        </div>
        <h1>Wanna (Farfetch group): launching new 3D viewer for bags. <span style="color: var(--text-light);">UX/UI design
                of product page</span></h1>
        <div class="content-wrapper">

            <div class="half xl">

                <nuxt-img format="webp" src="/wanna-bags.png" loading="lazy" quality="100" width="1200"
                    style="min-height: 900px;" />
            </div>
            <div class="half s" style="padding-left: 2rem;">
                <h3>UX/UI Design for online theater</h3>
            </div>

        </div>
    </div>
</template>