import { h } from 'hyperapp'

const GraphByLanguage=(codeISO, langue, props)=>{
  return h('div',[
    h('h2',langue,null),
    GraphLangue(codeISO,props)
  ],null)
}
