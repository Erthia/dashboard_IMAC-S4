export default {
  goToCountry: () => (state) => ({...state, currentPage: 0}),
  goToPet: () => (state) => ({...state, currentPage: 1})
}
