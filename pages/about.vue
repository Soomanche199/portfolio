<template>
  <div class="page about">
    <v-navbar />
    <div class="intro">
      <svg-icon class="intro__circle" view-box="0 0 2546.985 2519.781">
        <svg-circle-text />
      </svg-icon>
      <div class="container">
        <div class="intro__title">
          <div class="title__circle fade-zoom animated"></div>
          <div class="title__content">
            <div class="title__subtitle-wrapper">
              <div class="title__subtitle--vertical">
                <span>Fullstack web developer</span>
              </div>
              <div class="title__subtitle--horizon">
                <span>Fullstack web developer</span>
              </div>
            </div>
            <div class="title__title">
              <h2>
                Coding <br />
                better than<br />
                the yesterday
              </h2>
            </div>
          </div>
        </div>
        <div class="intro__content">
          <p>
            PactMedia is a full service design agency that drives positive
            change around social, economic, and environmental issues. Through
            creative communication and strategy, we build experiences that
            inspire dialogue and action.
          </p>
        </div>
      </div>
    </div>
    <div class="who">
      <div class="container">
        <h2 class="who__title">About me</h2>
        <p class="who__content">
          Hello, I am SeungHwan Choi who {{ calcYear }} year developer from
          Seoul, Korea. and now I'm working at Alocados as web backend and
          frontend developer. These days, coding is more fun than games, so I am
          focusing on coding. To become a better developer than yesterday, I am
          not neglecting my studies. Apart from coding, some other activities
          that I love to do! Making games with friend Singing Travelling
        </p>
      </div>
    </div>
    <div class="skills">
      <div class="container">
        <h2 class="skills__title">My skills</h2>
        <ul class="skills__content">
          <li v-for="(skill, idx) in skills" :key="idx" class="skills__item">
            <svg-icon
              v-if="skill.viewBox"
              :view-box="skill.viewBox"
              width="100%"
              height="100%"
              :title="calcTitle(skill.component)"
            >
              <component :is="skill.component" />
            </svg-icon>
            <fa v-else :icon="[skill.component[0], skill.component[1]]" />
          </li>
        </ul>
      </div>
    </div>
    <div class="experience">
      <div class="container">
        <h2 class="experience__title">Experience</h2>
        <div class="experience__content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

  transition: {
    enter(el, done) {
      this.$store.dispatch('transition/blobActive', {
        path: this.$route.path.substr(1),
        done,
        element: el,
      })
    },
    leave(el, done) {
      this.$store.dispatch('transition/blobInactive', {
        path: el.classList[1],
        done,
        element: el,
      })
    },
  },

  data: () => ({
    skills: [
      { viewBox: null, component: ['fab', 'java'] },
      { viewBox: '0 0 125 125', component: 'icons-icon-kotlin' },
      { viewBox: '0 0 32 32', component: 'icons-icon-spring' },
      { viewBox: '0 0 256 267', component: 'icons-icon-hibernate' },
      { viewBox: '0 0 256 170', component: 'icons-icon-mariadb' },
      { viewBox: '20.7 244.9 600.3 154.7', component: 'icons-icon-docker' },
      { viewBox: null, component: ['fab', 'js-square'] },
      { viewBox: null, component: ['fab', 'css3-alt'] },
      { viewBox: '0 0 256 256', component: 'icons-icon-postcss' },
      { viewBox: null, component: ['fab', 'vuejs'] },
      { viewBox: null, component: ['fab', 'bootstrap'] },
      { viewBox: '0 0 32 32', component: 'icons-icon-nuxt' },
      { viewBox: '0 0 32 32', component: 'icons-icon-webpack' },
      { viewBox: '0 0 32 32', component: 'icons-icon-jquery' },
      { viewBox: '0 0 32 32', component: 'icons-icon-tailwind' },
      { viewBox: null, component: ['fab', 'centos'] },
      { viewBox: null, component: ['fab', 'ubuntu'] },
      { viewBox: null, component: ['fab', 'aws'] },
      { viewBox: '0 0 2500 2500', component: 'icons-icon-heroku' },
      { viewBox: '0 0 678 103.4', component: 'icons-icon-vmware' },
      { viewBox: '0 0 882.7 688.6', component: 'icons-icon-nginx' },
    ],
  }),

  computed: {
    calcYear() {
      const now = new Date()
      return now.getFullYear() - 2017 + 'th'
    },
  },

  methods: {
    calcTitle(componentName) {
      const lastIndexOf = componentName.lastIndexOf('-')
      return componentName.substr(lastIndexOf + 1)
    },
  },
}
</script>

<style scoped>
@import 'assets/styles/page/about.pcss';
</style>
