import { h } from 'hyperapp'
import Chart from 'chart.js'
import ChartLabels from 'chartjs-plugin-labels';

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

export default (props) => 
h('div', {}, [
	h('h2', {}, 'COUNTRY CHART'),
    TheChart({values:[1, 10, 5, 2, 20, 30, 45]}),
    ]
);