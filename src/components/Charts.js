import { h } from 'hyperapp'
import Chart from 'chart.js'

// USING TEMPLATE, CURRENTLY NOT WORKING BECAUSE OF ??? 
/*
const TheChart0 = (props) => {
	const myChart = props
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d');
      const chart = new Chart(ctx, myChart)
      }});
}*/

//UGLY CODE NOT USING THE TEMPLATE BUT WORKING

const TheChart = (props) => {
	const myChart = {
		type: 'horizontalBar',
  data: {
    labels: ['France', 'Germany', 'USA', 'Australia', 'Brazil'],//props.labels, // => "France", "Italy", "Germany", etc...
    datasets: [{
      labels: "Number of emojis included in tweets",
      backgroundColor: ['#3e95cd', '#f4ac41', '#8e5ea2', '#3cba9f', '#f46441', '#e8c3b9', '#c45850', '#1d15da'],
      borderColor: 'rgb(0, 0, 0)',
      data: props.values // our number of occurrence
    }]
  },
  options: {
  	legend: { display: false },
    title: {
      display: true,
      text: "Pourcentage of emojis by country"
    },
  }
}
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d');
      const chart = new Chart(ctx, myChart)
      }});
}

const TheChart2 = (props) => {
	const myChart2 = {
	type: 'pie',
  data: {
    labels: ['Dog 🐶', 'Rabbit 🐰', 'Cat 🐱', 'Reptile 🐍', 'Fish 🐠', 'Turtle 🐢', 'Mouse 🐭'],//data.labels, // => "Cat", "Dog", "Rabbit", "Bird", "Snake", "Fish", "Turtle", "Mouse"
    datasets: [{
      labels: "Pourcentage of emojis by species",
      backgroundColor: ['#3e95cd', '#f4ac41', '#8e5ea2', '#3cba9f', '#f46441', '#e8c3b9', '#c45850', '#1d15da'],
      data: props.values // our number of occurrence
    }]
  },
  options: {
  	legend: { display: false },
    title: {
      display: true,
      text: "Pourcentage of emojis by country"
    },
  }
}
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d');
      const chart = new Chart(ctx, myChart2)
      }});
}

export default () => 
	h('div', {}, [
	h('h2', {}, 'PIE CHART'),
		TheChart2({values:[25, 10, 5, 2, 20, 30, 5]}),
    //TheChart0({pieTemplate(values:[1, 10, 5, 2, 20, 30, 45, 7])}),
    h('h2', {}, 'COUNTRY CHART'),
    TheChart({values:[1, 10, 5, 2, 20, 30, 45, 7]}),
    ]
);
 /*<div>
    <h2>PIE CHART</h2>
    <TheChart mychart = {pieTemplate(values:{[0, 10, 5, 2, 20, 30, 45, 7]})}  />
  </div>*/