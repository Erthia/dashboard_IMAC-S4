import { h } from 'hyperapp'
import Chart from 'chart.js'
import ChartLabels from 'chartjs-plugin-labels';

const TheChart = (props) => {
	const myChart = {
		type: 'horizontalBar',
  data: {
    labels: props.labels,
    datasets: [{
      labels: "Number of emojis included in tweets",
      backgroundColor: props.color,
      borderColor: 'rgb(0, 0, 0)',
      data: props.values
    }]
  },
  options: {
    responsive: true,
  	legend: { display: false },
    title: {
      display: true,
      position: 'top',
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

export default (state,props) => 
h('div', {class:'chartStyle'}, [
    TheChart({labels: state.countries, color:state.myBG, values:state.countryValues}),
    ]
);