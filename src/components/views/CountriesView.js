import { h } from 'hyperapp'
import Header from '../Header'

export default () =>
  h('div', {}, [
    Header(),
    h('h1', {}, 'Countries and pets emojis')
  ])
