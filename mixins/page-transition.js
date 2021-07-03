export default {
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
}
