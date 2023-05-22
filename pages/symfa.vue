<template>
    <div>
      <div class="wrapper">
        <div class="mobile"
            style="position: fixed; top: 0; right: -8px; z-index: 9999; padding: 1rem; font-size: 2rem; ">
            <nuxt-link class="mobile" style="font-size: 2rem; line-height: 50%; padding: 1rem ; border-radius: 20px;"
                to="/">×</nuxt-link>
        </div>
        <h1 class="headline">(symfa)</h1>
        <h2>UX/UI Design for Symfa corporate website</h2>
        <h3 class="half xl">
          The primary goals were to attract new customers, clearly communicate the company's services,
          differentiate Symfa visually from its main *boring blue color lovers club* competitors, and attract potential employees through a modern and
          friendly vibe.
        </h3>
        <p>Check out developed website below</p>
        <div style="display: flex; gap: 1%; margin: 2vw 0; width: 100%;">

          <iframe src="https://symfa.com/" frameborder="0" width="100&" height="800px"></iframe>
        </div>
        <p class="half xl">
          Customized visual elements, color schemes, and typography were employed to create a unique brand identity that reflects the company's values and expertise.
        </p>
        <p class="half xl">
          The UX design focused on intuitive and easy-to-use navigation, enabling visitors to quickly find the information they need. Clear menu structures, logical content organization, and search functionalities were implemented to enhance the user experience.
        </p>
      </div>
    </div>
  </template>
  

  
  <style>
  h3,
  p {
    font-size: calc(var(--widthA) / 55);
    margin-bottom: 1vw;
  }
  
  @media screen and (max-width: 768px) {
    iframe.desktop {
      width: 100%;
      margin-bottom: 1em;
      max-height: 80vh;
    }

  }
  </style>
  