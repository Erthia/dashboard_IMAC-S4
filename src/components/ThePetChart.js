import { h } from 'hyperapp'
import Chart from 'chart.js'
import ChartLabels from 'chartjs-plugin-labels';

let myValues = [25, 8, 35, 2, 10, 6, 5];
let myLabels =  ['🐶', '🐰', '🐱', '🐍', '🐠', '🐭', '🐥'];
let myBG = ['#3e95cd', '#f4ac41', '#8e5ea2', '#3cba9f', '#f46441', '#e8c3b9', '#c45850', '#1d15da', '#3e95cd'];

const TheChart2 = (props) => {
	const myChart2 = {
  type: 'pie',
  data: {
    labels: props.labels, //data.labels, // => "Cat", "Dog", "Rabbit", "Bird", "Snake", "Fish", "Turtle", "Mouse"
    datasets: [{
      labels: "Pourcentage of emojis by species",
      backgroundColor: props.background,
      data: props.values // our number of occurrence
    }]
  },
  options: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
      },
      onHover: function(event, legendItem) {
        var opt = this.options || {};
        var hover = opt.hover || {};
        var ci = this.chart;
        hovereIdx = legendItem.datasetIndex;
        ci.updateHoverStyle(ci.getDatasetMeta(hoveredIdx).data, hover.mode, true);
        ci.update();
      }
    },
    title: {
      display: true,
      text: "Pourcentage of emojis by country"
    },
   plugins: {
    labels: {
      render: 'label',
      precision: 0,
      showZero: true,
      fontSize: 20,
      fontColor: '#fff',
        fontStyle: 'normal',
        fontFamily: "'Helvetica Neue', sans-serif",
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
		TheChart2({values:myValues, labels:myLabels, background:myBG}),
    ]
);