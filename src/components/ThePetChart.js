import { h } from 'hyperapp'
import Chart from 'chart.js'
import ChartLabels from 'chartjs-plugin-labels';

const TheChart2 = (props) => {
	const myChart2 = {
	type: 'pie',
  data: {
    labels: ['🐶', '🐰', '🐱', '🐍', '🐠', '🐭', '🐥'],//data.labels, // => "Cat", "Dog", "Rabbit", "Bird", "Snake", "Fish", "Turtle", "Mouse"
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
     plugins: {
    labels: {
    	render: 'label',
// precision for percentage, default is 0
      precision: 0,
      showZero: true,
      fontSize: 20,

        fontColor: '#fff',
        fontStyle: 'normal',

        // font family, default is defaultFontFamily
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        position: 'default',
        overlap: true,  
			},
		},
  },
}
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d');
      const chart = new Chart(ctx, myChart2)
      }});
}

export default (props) => 
h('div', {}, [
	  h('h2', {}, 'PIE CHART'),
		TheChart2({values:[25, 10, 5, 2, 20, 30, 5]}),
    ]
);