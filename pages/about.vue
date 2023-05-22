<template>
  <div>
    <div class="wrapper">
      <div class="mobile" style="position: fixed; top: 0; right: -8px; z-index: 9999; padding: 1rem; font-size: 2rem; ">
        <nuxt-link class="mobile" style="font-size: 2rem; line-height: 50%; padding: 1rem ; border-radius: 20px;"
          to="/">×</nuxt-link>
      </div>



      <div>

        <ul class="clients">
          <h1 class="headline">(about)</h1>
          <h2 style="display: inline-block; ">As a designer, my goal is to create
            products that people love and connect to <span>
              <next />.
            </span><br> I worked with tech companies,

            <span>
              design studios and startups helping them engage their audiences, make complex things simple and drive
              positive outcomes.
            </span>

          </h2>

          <div style="display: flex; border-top: 0px solid; padding-top: 2em;">
            <h2 class="half">Clients</h2>
            <h2 class="clients" style="padding: 0;">
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
      <section>
        <div>
          <div style="position: sticky; top: 0; height: fit-content;">
            <h2>POV: you hired me for work and got</h2>
          </div>
        </div>
        <div style="display: flex; gap: 0vw; flex-wrap: wrap;">
          <ul class="cv">
            <h3>Research</h3>
            <p style="margin-bottom: .5em;">It's the very first thing I do before opening Figma. Research helps to save
              time
              on
              design, highlight common patterns in existing products and create hypothesis.</p>
            <p>I dive deep to gather and analyze data from various sources, including user interviews, surveys, exsisting
              products and their solutions, and use that information to maintain design decisions that improve user
              experiences and drive project success.</p>
          </ul>
          <ul class="cv">
            <h3>UX/UI design</h3>
            <p style="margin-bottom: .5em;">I design user-centered interfaces for products, working closely with
              cross-functional teams to make sure design idea works as it should and meet business goals.</p>
            <p style="margin-bottom: .5em;">In addition, I enjoy mentoring junior designers, pitching concepts to clients,
              and working alongside other motivated professionals.</p>
            <p> Keywords for HR: design systems, wireframing, prototyping, usability and concept testing, CJM, JTBD,
              responsible and
              adaptive design, typography, grids, 3D basics, motion design.</p>

          </ul>

          <ul class="cv">
            <h3>Front-end development</h3>
            <p style="margin-bottom: .5em;">Proficient in HTML, CSS, and a bit in JavaScript, allowing me to create
              interactive prototypes, ready-to-go
              components, test concepts, and work more effectively with developers.</p>
            <p>Knowing all that also help me to handle basic web developement like static websites, landing pages, design
              systems, mixins, components, adaptive layouts. I work with Git and tend to speed up some routine tasks.
              Usually I use Nuxt framework for my personal projects.</p>
          </ul>
          <ul class="cv">
            <h3>Creative concepts</h3>
            <p style="margin-bottom: .5em;">I am skilled in ideation and concept development, and have a proven ability to
              generate innovative ideas and solutions while keeping in mind relevant limitations and contexts.</p>
            <p>My familiarity with various software instruments enables me to develop and lead ideas all the way through
              to
              production.</p>
          </ul>
        </div>
      </section>
    </div>




  </div>
</template>
  
<style scoped>
* {
  box-sizing: border-box;
}

section {
  margin-top: 4vw;
}

.clients {
  display: flex;
  gap: .5vw;
  flex-wrap: wrap;
}

a.client {
  display: inline-flex;
  flex-wrap: wrap;
  padding: .25em;
  box-sizing: content-box;
  font-size: xx-large;
  background-color: var(--bg);
  border: 2px solid var(--text);
  font-size: calc((var(--widthA))/45);
  border-radius: 1vw;
  line-height: 87%;


}

a.client:hover {
  border: 2px solid var(--accent);
  background-color: var(--accent);
  color: var(--white);
}

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
}

ul.cv {
  font-size: x-large;
  padding: 2vw;
  background-color: var(--accent);
  border-radius: 2vw;
  width: 50%;
}

ul.cv p:last-child {
  margin-bottom: 0;
}


@media screen and (max-width: 767px) {

  section {
    margin-top: 2rem;
  }

  .clients {
    gap: .25em;
  }

  a.client {
    display: inline-flex;
    flex-wrap: wrap;
    padding: .25em;
    font-size: 1.5rem;
    background-color: var(--bg);
    border: 2px solid var(--text);
    border-radius: .5em;
    line-height: 87%;

  }

  ul.cv {
    font-size: 2em;
    padding: 1.25rem .75rem;
    margin-bottom: .25rem;
    background-color: var(--accent);
    border-radius: 1rem;
    width: 100%;
  }




  .cv h3 {
    font-size: 1em;
  }

  .cv p {
    text-indent: 2rem;
    font-size: 1rem;
    padding: 0;
    line-height: 120%;
  }

  h2.half {
    padding: 0 .5rem;
    padding-right: 1rem;
    width: fit-content;
  }

}</style>