<template>
  <div>
    <nuxt-child :photo="photo" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async fetch({ $axios, params, store }) {
    const response = await $axios.get(`/photos/${params.id}`)
    const photo = response.data

    store.commit('SET_CURRENT_PHOTO', photo)
  },
  computed: {
    ...mapState({
      photo: 'currentPhoto'
    })
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
