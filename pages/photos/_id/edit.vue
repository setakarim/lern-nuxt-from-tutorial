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
  props: {
    photo: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: 'Edit'
    }
  }
}
</script>

<style></style>
