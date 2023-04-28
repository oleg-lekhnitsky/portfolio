<template>
    <div class="header">

        <div class="logo">
            <NuxtLink to="/" class="logo">
                <!-- <svg
          width="100%" 
          preserveAspectRatio='1' 
          viewBox="0 0 399 399" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
              <g id="home-group">
              <rect width="401" height="401" fill="var(--bg)"/>
              <path id="home" d="M174.173 290.297V226.963H224.839V290.297C224.839 297.263 230.539 302.963 237.506 302.963H275.506C282.473 302.963 288.173 297.263 288.173 290.297V201.63H309.706C315.533 201.63 318.319 194.41 313.886 190.61L207.993 95.23C203.179 90.9233 195.833 90.9233 191.019 95.23L85.1261 190.61C80.8195 194.41 83.4795 201.63 89.3061 201.63H110.839V290.297C110.839 297.263 116.539 302.963 123.506 302.963H161.506C168.473 302.963 174.173 297.263 174.173 290.297Z" fill="var(--text)"/>
              </g>
          </svg>           -->
                <nuxt-img src='/me.png' class="nav-img" format="webp" width={800} height={800} />
                <p class="logo-title">Oleg Lekhnitsky <br> <span style="color: #BEBEBE;">UX/UI Designer</span></p>
            </NuxtLink>
        </div>
        <h1 class="mobile" style="font-size: xx-large; margin: 0;">I design digital solutions for businesses combining my expertise in UX/UI design, front-end development and
                branding.
                <span style="color: var(--text-light);">I am passionate about creating user-centered products that solve
                    problems and make life a little better. Advocating for design at all&nbsp;levels.</span>

            </h1>
        <nav>

            <ul>
                <li>
                    <NuxtLink to='/about'>About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to='/cases/pra'>Collections</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="cta" to='/contact'>Contact</NuxtLink>
                </li>
            </ul>
        </nav>

        <div class="cases-wrapper">
            <h3>Selected Projects</h3>
            <div class="cases">

                <NuxtLink class="case-link" to="/bf">
                    <nuxt-img src='/bf.png' class="nav-img" format="webp" width={800} height={800} />
                    <!-- <p>Panda</p> -->
                </NuxtLink>
                <NuxtLink class="case-link" to="/symfa">
                    <nuxt-img src='/symfa.png' class="nav-img" format="webp" width={800} height={800} quality="100" />
                </NuxtLink>
                <NuxtLink class="case-link" to="/wanna">
                    <nuxt-img src='/wanna.png' class="nav-img" format="webp" width={800} height={800} />
                </NuxtLink>
                <NuxtLink class="case-link" to="/wanna">
                    <nuxt-img src='/pra.png' class="nav-img" format="webp" width={800} height={800} />
                </NuxtLink>


            </div>
        </div>
        <!-- <p>Color mode: {{ $colorMode.value }}</p> -->
        <!-- <select v-model="$colorMode.preference">
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select> -->

        <button> <span
                style="position: absolute; top: 1px; width: 15px; height: 15px; background-color: var(--text); border-radius: 50%;"></span>
            <span style="margin-left: 20px;" v-if="$colorMode.value == 'light'" @click="$colorMode.preference = 'dark'">Dark
                mode</span>
            <span style="margin-left: 20px;" v-else="$colorMode.value == 'dark'"
                @click="$colorMode.preference = 'light'">Light mode</span>
        </button>
        <!-- <button v-else="$colorMode.value == 'dark'" @click="$colorMode.preference = 'light'">light</button> -->
        <lastmodified />
    </div>
</template>



