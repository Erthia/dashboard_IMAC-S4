import { h } from 'hyperapp'
const Twit= require('twit');
const config= require('.../actions/config');

const PetsView= (props)=> {
  props.Twit = new Twit(config) 
  return h('div',[
    h('header',[
      h('h1', 'Worldwide Pets Emojis Distribution','')
    ],''),
    h('div'[Graph(props),Liste(props.pets)],'content')
  ],'')
}
/*
export default () =>
  <div>
    <header>
      <h1>Worldwide Pets Emojis Distribution</h1>
    </header>
  </div>*/
