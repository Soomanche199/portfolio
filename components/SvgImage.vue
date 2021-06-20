<template></template>

<script>
export default {
  name: 'Svg',
  props: {
    type: {
      type: String,
      validator(value) {
        return ['icon', 'image'].includes(value)
      },
      default: 'icon',
    },
    width: {
      type: [String, Number],
      default: () => (this.type === 'image' ? '' : '1em'),
      required: () => this.type === 'image',
    },
  },
}
</script>
