import { h } from 'hyperapp'

export default (props) =>
  h('header', {}, [
    h('i', {class: 'fas fa-globe-europe'},[]),
    h('p', {}, '#'),
    h('i', {class: 'fas fa-paw'},[])
  ])
