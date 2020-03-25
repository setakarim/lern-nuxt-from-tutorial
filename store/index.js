export const state = () => ({
  photos: [],
  currentPhoto: {}
})

export const mutations = {
  SET_PHOTOS(state, photos) {
    state.photos = photos
  },
  SET_CURRENT_PHOTO(state, photo) {
    state.currentPhoto = photo
  }
}
