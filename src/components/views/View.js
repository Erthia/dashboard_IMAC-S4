import { h } from 'hyperapp'
import Header from '../Header'

export default (state) =>
  h('div', {}, [
    Header(state.currentPage),
    h('h1', {}, ['Proportion of twits including pet emojis, by country', 'Hashtags associated with each pet emoji', 'Comparative usage of choosen pet emojis'][state.currentPage])
  ])
