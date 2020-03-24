<template>
  <div>
    <h1>Photos</h1>
    <div v-for="photo in photos" :key="photo.id">
      <nuxt-link :to="`/photos/${photo.id}`">{{ photo.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.get('/photos')
    // eslint-disable-next-line no-console
    console.log('Data photo : ', response.data)

    const photos = response.data.map((v) => v)

    return { photos }
  },
  head() {
    return {
      title: 'Photo Lists - Learn Vue'
    }
  }
}
</script>

<style lang="stylus" scoped></style>
