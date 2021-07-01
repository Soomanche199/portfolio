import charming from 'charming'
import Blob from '@/utils/blob'
import anime from 'animejs'

export const state = () => ({
  navLinks: [],
  blobs: {},
  pageReady: false,
  isServer: true,
  prevPath: null,
})

export const mutations = {
  initNavLinks(state, elements) {
    state.navLinks = elements
  },

  leaveNavLinks(state) {
    anime({
      targets: state.navLinks.map((link) => link.querySelectorAll('span')),
      delay: (t, i) => anime.random(0, 300),
      duration: 200,
      easing: 'easeInOutQuad',
      opacity: 0,
      begin: () =>
        state.navLinks.forEach((link) =>
          link.classList.remove('menu__item--showDeco')
        ),
    })
  },

  initBlobs(state, blobs) {
    Array.from(blobs).forEach((el) => {
      const blob = new Blob(el)
      state.blobs[el.getAttribute('data-route')] = blob
      blob.intro()
    })
  },

  changePageStatus(state, flag) {
    state.pageReady = flag
  },

  changeRoute(state, path) {
    state.isServer = false
    state.prevPath = path
  },
}

export const actions = {
  initNavLinks({ state, commit }, navLinks) {
    commit('initNavLinks', navLinks)

    navLinks.forEach((link) => {
      charming(link)
      anime({
        targets: link.querySelectorAll('span'),
        duration: 800,
        delay: (t, i) => anime.random(0, 600) + 500,
        easing: 'easeInOutQuad',
        opacity: [0, 1],
        complete: () => {
          link.classList.add('menu__item--showDeco')
        },
      })
    })
  },

  async changeRoute({ state, commit }, path) {
    commit('changeRoute', path)
    await this.$router.push(path)
  },

  blobActive({ state, commit, dispatch }, { path, done, element }) {
    const blobs = state.blobs
    blobs[path].expand().then(() => {
      commit('changePageStatus', true)
      dispatch('pageReveal', { element, done })
    })

    Object.keys(blobs)
      .filter((key) => key !== path)
      .forEach((key) => blobs[key].hide())
  },

  async blobInactive({ state, commit, dispatch }, { path, done, element }) {
    const blobs = state.blobs
    await dispatch('pageHide', { element })
    blobs[path].collapse().then(() => {
      commit('changePageStatus', true)
      done()
    })

    Object.keys(blobs)
      .filter((key) => key !== path)
      .forEach((key) => blobs[key].show())
  },

  enterNavLinks({ state }, done) {
    const links = []
    state.navLinks.forEach((link) => {
      charming(link)
      links.push(...link.querySelectorAll('span'))
    })
    anime({
      targets: links,
      duration: 200,
      delay: (t, i) => anime.random(0, 600),
      easing: 'easeInOutQuad',
      opacity: [0, 1],
      complete: () => {
        state.navLinks.forEach((link) => {
          link.classList.add('menu__item--showDeco')
        })
        done()
      },
    })
  },

  pageReveal({ state }, { element, done }) {
    anime({
      targets: element,
      duration: 300,
      delay: (t, i) => anime.random(0, 600),
      easing: 'easeInOutQuad',
      opacity: [0, 1],
      complete: () => {
        element.classList.add('page--ready')
        done()
      },
    })
  },

  pageHide({ state }, { element }) {
    return new Promise((resolve) => {
      anime({
        targets: element,
        duration: 300,
        delay: (t, i) => anime.random(0, 600),
        easing: 'easeInOutQuad',
        opacity: 0,
        begin: () => {
          element.classList.remove('page--ready')
          resolve()
        },
      })
    })
  },
}
