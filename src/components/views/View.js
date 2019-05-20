import { h } from 'hyperapp'
import Header from '../Header'
import ThePetChart from '../ThePetChart'
import TheCountryChart from '../TheCountryChart'

export default (state, actions) =>
  h('body', {id:'body'}, [
	//Header({id:'icons', page: state.currentPage, actions: actions}),
    h('main', {id:'main'}, [
    	h('div', {id:'titleBlock'}, [
    		h('h1', {id:'title'}, ['Proportion of tweets including pet emojis, by country','Usage of pet emojis on Twitter'][state.currentPage]),
    	]),
    	h('div', {class:'container'}, [
    		//[TheCountryChart, ThePetChart][state.currentPage],
    		ThePetChart,
    		TheCountryChart
    	]),
   	]),
   	h('footer', {}, [
	    h('p', {id:'credits'}, 'fait par Emilie Corradi, Agathe Prioleau & Laurine Sajdak'),
	]), 
  ])
