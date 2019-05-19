import { h } from 'hyperapp'

export default (props) => {
  let icons = [
    'fas fa-globe-europe',
    'fas fa-paw'
  ].map(i => i.concat(' menuElt'))
  icons[props.page] = icons[props.page].concat(' selected')

  return h('header', {}, [
    h('span', {class:'fontAwesomeStyle'}, [h('i', {class: icons[0], onclick: props.actions.goToCountry},[])]),
    h('span', {class:'fontAwesomeStyle'}, [h('i', {class: icons[1], onclick: props.actions.goToPet},[])])
  ])
}