import { h } from 'hyperapp'

const PetsView= (props)=> {
  return h('div',[
    h('header',[
      h('h1', 'Worldwide Pets Emojis Distribution','')
    ],''),
    h('div'[Graph(props),Liste(props)],'content')
  ],'')
}
/*
export default () =>
  <div>
    <header>
      <h1>Worldwide Pets Emojis Distribution</h1>
    </header>
  </div>*/
