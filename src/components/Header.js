import { h } from 'hyperapp'



export default (props) => {
  //Je vois pas comment faire ça en 100% declarative
  let icons = [
    'fas fa-globe-europe',
    '',
    'fas fa-paw'
  ].map(i => i.concat(' menuElt'))
  icons[props] = icons[props].concat(' selected')

  return h('header', {}, [
    h('i', {class: icons[0]},[]),
    h('p', {class: icons[1]}, '#'),
    h('i', {class: icons[2]},[])
  ])
}