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
  }
}
</script>

<style lang="stylus" scoped></style>
