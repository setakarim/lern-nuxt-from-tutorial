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
  // eslint-disable-next-line vue/require-prop-types
  props: ['photo']
}
</script>

<style lang="stylus" scoped></style>
