import { h } from 'hyperapp'

export default (props) => {
  let icons = [
    'fas fa-globe-europe',
    '',
    'fas fa-paw'
  ].map(i => i.concat(' menuElt'))
  icons[props.page] = icons[props.page].concat(' selected')

  return h('header', {}, [
    h('i', {class: icons[0], onclick: props.actions.goToCountry},[]),
    h('p', {class: icons[1]}, '#'),
    h('i', {class: icons[2], onclick: props.actions.goToPet},[])
  ])
}