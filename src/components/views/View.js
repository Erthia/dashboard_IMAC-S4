import { h } from 'hyperapp'
import Header from '../Header'
import {PieTemplate, HorizontalBarTemplate} from '../ChartsTemplate'
import Charts from '../Charts'

export default (state) =>
  h('div', {}, [
    Header(state.currentPage),
    h('h1', {}, ['Proportion of twits including pet emojis, by country', 'Hashtags associated with each pet emoji', 'Comparative usage of choosen pet emojis'][state.currentPage]),
  	Charts(),
  ])
