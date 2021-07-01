<template>
  <div class="home"></div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('transition')

export default {
  name: 'Home',

  transition: {
    enter(el, done) {
      this.$store.dispatch('transition/enterNavLinks', done)
    },
    leave(el, done) {
      this.$store.commit('transition/leaveNavLinks', done())
    },
  },

  methods: {
    ...mapActions(['changeRoute', 'blobActive']),
  },
}
</script>
