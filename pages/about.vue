<template>
  <div>
    <div class="wrapper">
      <!-- <h1>I've been working as a digital designer for last 4 years
        <span style="color: var(--text-light);">with tech companies and startups</span>
      </h1> -->


      <div>
        
        <ul class="clients">
          <h1 style="font-size: 20vw; letter-spacing: -.03em;">(about)</h1>
          <h1 style="display: inline-block; max-width: 100%; box-sizing: border-box;">As a designer, my goal is to create
            products that people love and connect to <span ><next/>.</span><br> I worked with tech companies,
            
            <span>
              design studios and startups helping them engage their audiences, make complex things simple and drive positive outcomes.
            </span>

          </h1>

          <div style="display: flex; border-top: 0px solid; padding-top: 2em;">
            <h1 class="half">Clients</h1>
            <h2 style="display: flex; gap: .5vw; flex-wrap: wrap;">
              <span><nuxt-link class="client" href="https://wanna.fashion/">Wanna</nuxt-link></span>
              <span><nuxt-link class="client" href="https://pandadoc.com/">PandaDoc</nuxt-link></span>
              <span><nuxt-link class="client" href="https://symfa.com/">Symfa</nuxt-link></span>
              <span><nuxt-link class="client" href="https://embacy.io/">Embacy Agency</nuxt-link></span>
              <span><nuxt-link class="client" href="https://eyelet.io/">Eyelet</nuxt-link></span>
              <span><nuxt-link class="client" href="https://keep-forest.com/">KeepForest</nuxt-link></span>
              <span><nuxt-link class="client" href="https://en.northernlightsff.com/">Northernlightsff</nuxt-link></span>
              <span><nuxt-link class="client" href="https://turkcell.com.tr/">Turkcell</nuxt-link></span>
              <span><nuxt-link class="client"
                  href="https://pocketrocket.agency/">Pocket&nbsp;Rocket&nbsp;Agency</nuxt-link></span>
              <span><nuxt-link class="client" href="https://the-hole.tv/">The&nbsp;Hole</nuxt-link></span>
            </h2>
          </div>
        </ul>

      </div>

      <div class="content-wrapper" style="margin-top: 4em; ">
        <div style="position: sticky; top: 0; height: fit-content;">
          <h1>POV: you hired me for work and got</h1>
        </div>
      </div>
      <div style="display: flex; gap: 0vw; flex-wrap: wrap;">
        <ul
          style="font-size: large; width: 50%; padding: 2vw; background-color: var(--accent); border-radius: 2vw; color: var(--bg);">
          <h3>Research</h3>
          <p style="margin-bottom: .5em;">It's the very first thing I do before opening Figma. Research helps to save time on
            design, highlight common patterns in existing products and create hypothesis.</p>
          <p>I dive deep to gather and analyze data from various sources, including user interviews, surveys, exsisting
            products and their solutions, and use that information to maintain design decisions that improve user
            experiences and drive project success.</p>
        </ul>
        <ul style="font-size: x-large; padding: 2vw; background-color: var(--accent); border-radius: 2vw; width: 50%; ">
          <h3>UX/UI design</h3>
          <p style="margin-bottom: .5em;">I design user-centered interfaces for products, working closely with
            cross-functional teams to make sure design idea works as it should and meet business goals.</p>
            <p style="margin-bottom: .5em;">In addition, I enjoy mentoring junior designers, pitching concepts to clients, and working alongside other motivated professionals.</p>            
          <p> Keywords for HR: design systems, wireframing, prototyping, usability and concept testing, CJM, JTBD,
            responsible and
            adaptive design, typography, grids, 3D basics, motion design.</p>

        </ul>

        <ul style="font-size: x-large; padding: 2vw; background-color: var(--accent); border-radius: 2vw; width: 50%;">
          <h3>Front-end development</h3>
          <p style="margin-bottom: .5em;">Proficient in HTML, CSS, and a bit in JavaScript, allowing me to create
            interactive prototypes, ready-to-go
            components, test concepts, and work more effectively with developers.</p>
          <p>Knowing all that also help me to handle basic web developement like static websites, landing pages, design systems, mixins, components, adaptive layouts. I work with Git and tend to speed up some routine tasks. Usually I use Nuxt framework for my personal projects.</p>
        </ul>
        <ul style="font-size: x-large; padding: 2vw; background-color: var(--accent); border-radius: 2vw; width: 50%;">
          <h3>Creative concepts</h3>
          <p style="margin-bottom: .5em;">I am skilled in ideation and concept development, and have a proven ability to generate innovative ideas and solutions while keeping in mind relevant limitations and contexts.</p>
          <p>My familiarity with various software instruments enables me to develop and lead ideas all the way through to production.</p>
        </ul>
      </div>
    </div>



  </div>
</template>
  
<style scoped>
h3 {

  color: var(--white);
  font-size: calc((var(--widthA))/35);
  margin: 0;
  margin-bottom: .5em;
  padding: 0;
  line-height: 95%;
  font-weight: 500;
}

p {
  text-indent: 4vw;
  font-size: calc((var(--widthA))/75);
  color: var(--white);
  hyphens: auto;
}</style>