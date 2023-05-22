<template>
    <div class="header">

        <div class="logo">
            <NuxtLink to="/" class="logo">

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
                <!-- <li>
                    <NuxtLink to='/cases/pra'>Collections</NuxtLink>
                </li> -->
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
                <NuxtLink class="case-link" to="/pra">
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
            <div class="header-additional">
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
    </div>
</template>



