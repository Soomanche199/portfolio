import anime from 'animejs'

function debounce(func, wait, immediate) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export default class Blob {
  constructor(el, options) {
    this.element = el
    this.options = {}
    Object.assign(this.options, options)
    this.init()
  }

  init() {
    /*
     rect => g
     desc => g > path['d']  1:1
     layers => g > path     1:N
    */
    this.rect = this.element.getBoundingClientRect()
    this.desc = []
    this.layers = Array.from(
      this.element.querySelectorAll('path'),
      (target) => {
        target.style.transformOrigin = `${
          this.rect.left + this.rect.width / 2
        }px ${this.rect.top + this.rect.height / 2}px`
        target.style.opacity = '0'
        this.desc.push(target.getAttribute('d'))
        return target
      }
    )

    window.addEventListener(
      'resize',
      debounce(() => {
        this.rect = this.element.getBoundingClientRect()
        this.layers.forEach(
          (layer) =>
            (layer.style.transformOrigin = `${
              this.rect.left + this.rect.width / 2
            }px ${this.rect.top + this.rect.height / 2}px`)
        )
      }, 20)
    )
  }

  intro() {
    anime.remove(this.layers)
    anime({
      targets: this.layers,
      duration: 1800,
      delay: (t, i) => i * 120,
      easing: 'cubicBezier(0.2, 1, 0.1, 1)',
      scale: [0.2, 1],
      opacity: {
        value: [0, 1],
        duration: 300,
        delay: (t, i) => i * 120,
        easing: 'linear',
      },
    })
  }

  expand() {
    return new Promise((resolve, reject) => {
      let halfway = false
      anime({
        targets: this.layers,
        duration: 1000,
        delay: (t, i) => i * 50 + 200,
        easing: 'cubicBezier(0.8, 0, 0.1, 0)',
        d: (t) => t.getAttribute('pathdata:id'),
        update(anim) {
          if (anim.progress > 75 && !halfway) {
            halfway = true
            resolve()
          }
        },
      })
    })
  }

  collapse() {
    return new Promise((resolve, reject) => {
      let halfway = false
      anime({
        targets: this.layers,
        duration: 800,
        delay: (t, i, total) => (total - i - 1) * 50 + 400,
        easing: 'cubicBezier(0.2, 1, 0.1, 1)',
        d: (t, i) => this.desc[i],
        update(anim) {
          if (anim.progress > 75 && !halfway) {
            halfway = true
            resolve()
          }
        },
      })
    })
  }

  hide() {
    anime.remove(this.layers)
    anime({
      targets: this.layers,
      duration: 800,
      delay: (t, i, total) => (total - i - 1) * 80,
      easing: 'easeInOutExpo',
      scale: 0,
      opacity: {
        value: 0,
        duration: 500,
        delay: (t, i, total) => (total - i - 1) * 80,
        easing: 'linear',
      },
    })
  }

  show() {
    setTimeout(() => this.intro(), 400)
  }
}
