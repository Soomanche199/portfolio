<template>
  <transition appear @after-appear="intro">
    <main id="default" class="ready">
      <svg-the-blob />
      <!-- 실제 컨첸츠 -->
      <div class="menu-wrapper">
        <nav class="menu">
          <a href="#" class="menu__item" @click.prevent="changeRoute('/about')"
            >about</a
          >
          <a
            href="#"
            class="menu__item"
            @click.prevent="changeRoute('/articles')"
            >articles</a
          >
          <a
            href="#"
            class="menu__item"
            @click.prevent="changeRoute('/portfolio')"
            >portfolio</a
          >
          <a
            href="#"
            class="menu__item"
            @click.prevent="changeRoute('/contact')"
            >contact</a
          >
          <a href="#" class="menu__item" @click.prevent="changeRoute('/dummy1')"
            >contact</a
          >
          <a href="#" class="menu__item" @click.prevent="changeRoute('/dummy2')"
            >contact</a
          >
        </nav>
      </div>
      <Nuxt />
    </main>
  </transition>
</template>

<style scoped>
@import 'assets/styles/layout/default.pcss';
</style>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapMutations } = createNamespacedHelpers('transition')

export default {
  computed: {
    // triggerAnimation() {
    //   const notHome = this.$route.path !== '/'
    //   if (this.isSsr && notHome) {
    //     this.enter(this.$el)
    //     this.navLinks.forEach((link) => {
    //       anime.remove(link.querySelectorAll('span'))
    //     })
    //     this.setPrevRoute(this.$route.path)
    //   }
    //   return { ssr: this.isSsr }
    // },
  },

  mounted() {
    const navLinks = Array.from(this.$el.querySelectorAll('.menu__item'))
    if (this.$store.state.transition.isServer) {
      this.$store.dispatch('transition/initNavLinks', navLinks)
      return
    }

    this.$store.commit('transition/initNavLinks', navLinks)
  },

  methods: {
    ...mapMutations(['leaveNavLinks']),
    ...mapActions(['changeRoute', 'blobActive']),

    intro() {
      this.$el.classList.remove('ready')
    },

    enter(el, done) {
      // const path = this.$route.path.substr(1)
      // if (path === '') {
      //   this.leave(el, done)
      //   return
      // }
      //
      // const currentBlob = this.blobs[path]
      // if (!currentBlob) {
      //   return
      // }
      //
      // currentBlob.expand().then(() => {
      //   el.style.opacity = 1
      //
      //   anime({
      //     targets: [
      //       el.querySelectorAll('.content__title > span'),
      //       el.querySelectorAll('.content__subtitle > span'),
      //       this.ctrlBack,
      //     ],
      //     duration: 200,
      //     delay: (t, i) => anime.random(0, 600),
      //     easing: 'easeInOutQuad',
      //     opacity: [0, 1],
      //   })
      // })
      //
      // Object.keys(this.blobs)
      //   .filter((el) => el !== currentBlob.element.getAttribute('data-route'))
      //   .forEach((blobKey) => this.blobs[blobKey].hide())
      //
      // if (done) {
      //   done()
      // }
    },

    leave(el, done) {
      // if (el.classList.include('home')) {
      //   console.log('home leave')
      //   this.leaveNavLinks()
      //   this.blobActive(el.classList[1])
      // }
      // anime({
      //   targets: [
      //     el.querySelectorAll('.content__title > span'),
      //     el.querySelectorAll('.content__subtitle > span'),
      //     this.ctrlBack,
      //   ],
      //   delay: (t, i) => anime.random(0, 300),
      //   duration: 200,
      //   easing: 'easeInOutQuad',
      //   opacity: 0,
      //   complete: () => {
      //     el.style.opacity = 0
      //   },
      // })
      //
      // const path = this.prevRoute.substr(1)
      //
      // const currentBlob = this.blobs[path]
      // currentBlob.collapse().then(() => {
      //   anime({
      //     targets: this.navLinks.map((link) => link.querySelectorAll('span')),
      //     duration: 200,
      //     delay: (t, i) => anime.random(0, 600),
      //     easing: 'easeInOutQuad',
      //     opacity: 1,
      //     complete: () =>
      //       this.navLinks.forEach((link) => {
      //         link.style.pointerEvents = 'auto'
      //         link.classList.add('menu__item--showDeco')
      //       }),
      //   })
      // })
      //
      // Object.keys(this.blobs)
      //   .filter((el) => path !== el)
      //   .forEach((blobKey) => this.blobs[blobKey].show())
      //
      // if (done) {
      //   done()
      // }
    },
  },
}
</script>
