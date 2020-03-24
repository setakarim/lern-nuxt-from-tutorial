<template>
  <div>
    <nuxt-child :photo="photo" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const response = await $axios.get(`/photos/${params.id}`)
    // eslint-disable-next-line no-console
    console.log('Data photo : ', response.data)

    const photo = response.data

    return { photo }
  },
  head() {
    return {
      title: '',
      titleTemplate: `%s ${this.photo.title} - Learn Vue`
    }
  }
}
</script>

<style lang="stylus" scoped></style>
