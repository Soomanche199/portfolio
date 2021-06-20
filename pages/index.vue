<template>
  <div class="home">
    <nav class="menu">
      <a href="#" class="menu__item" @click.prevent="changeRoute('/about')"
        >about</a
      >
      <a href="#" class="menu__item" @click.prevent="changeRoute('/articles')"
        >articles</a
      >
      <a href="#" class="menu__item" @click.prevent="changeRoute('/portfolio')"
        >portfolio</a
      >
      <a href="#" class="menu__item" @click.prevent="changeRoute('/contact')"
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

  mounted() {
    const navLinks = Array.from(this.$el.querySelectorAll('.menu__item'))
    if (this.$store.state.transition.isServer) {
      this.$store.dispatch('transition/initNavLinks', navLinks)
      return
    }

    this.$store.commit('transition/initNavLinks', navLinks)
  },

  methods: {
    ...mapActions(['changeRoute', 'blobActive']),
  },
}
</script>

<style scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
  z-index: 10;

  @media (max-width: 55em) {
    flex-direction: column;
    height: auto;
    min-height: 0;
    padding-bottom: 10em;
  }
}

.menu {
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 25vw;
  font-size: 4vw;
  align-items: flex-start;

  @media (max-width: 55em) {
    font-size: 2.75em;
    margin: 0 auto;
    align-items: center;
  }
}

.menu__item {
  color: var(--color-menu);
  line-height: 1.25;
  text-transform: lowercase;
  letter-spacing: -0.025em;
  text-indent: -0.025em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  pointer-events: none;
}

.menu__item:hover,
.menu__item:focus {
  color: var(--color-menu-hover);
}

.menu__item::before {
  content: '';
  width: 60%;
  height: 25px;
  background: linear-gradient(45deg, #f19872, #e86c9a);
  position: absolute;
  left: 0;
  bottom: 0;
  transform-origin: 0 0;
  transform: scale3d(0, 1, 1);
}

.menu__item:nth-child(2)::before {
  background: linear-gradient(45deg, #0947db, #07d89d);
}

.menu__item:nth-child(3)::before {
  background: linear-gradient(45deg, #ee2d29, #f8ae2c);
}

.menu__item:nth-child(4)::before {
  background: linear-gradient(45deg, #3a3d98, #6f22b9);
}

.menu__item:nth-child(5)::before {
  background: linear-gradient(45deg, #9d316e, #de2d3e);
}

.menu__item:nth-child(6)::before {
  background: linear-gradient(45deg, #00ac53, #23c3e0);
}

.menu__item.menu__item--showDeco {
  pointer-events: auto;

  &::before {
    transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
    transform: scale3d(1, 1, 1);
  }

  &:hover::before {
    transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
    transform: scale3d(1.2, 1, 1);
  }
}

.menu__item::v-deep span {
  display: block;
  position: relative;
}
</style>
