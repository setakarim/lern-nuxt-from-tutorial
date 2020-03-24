<template>
  <div>
    <h1>Editing {{ photo.title }}</h1>
    <nuxt-link :to="`/photos/${photo.id}`">
      <button>Go back</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['photo']
}
</script>

<style></style>
