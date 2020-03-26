<template>
  <div>
    We are in photo {{ photo.title }}
    <nuxt-link :to="`/photos/${photo.id}/edit`">
      <button>Edit</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: 'View'
    }
  }
}
</script>

<style lang="stylus" scoped></style>
