<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
  >
    <title v-if="title" v-text="title" />
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    type: {
      type: String,
      validator(value) {
        return ['icon', 'image'].includes(value)
      },
      default: 'icon',
    },
    viewBox: {
      type: String,
      default: '0 0 32 32',
    },
    width: {
      type: [String, Number],
      default: '1em',
    },
    height: {
      type: [String, Number],
      default: '1em',
    },
    title: {
      type: String,
      default: null,
    },
  },
}
</script>
