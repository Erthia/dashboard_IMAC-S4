import { h } from 'hyperapp'
import Chart from 'chart.js'
import ChartLabels from 'chartjs-plugin-labels';


const TheChart2 = (props) => {
	const myChart = {
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
    responsive: true,
    legend: {
      position: 'right',
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
      position: 'top',
      text: "Pourcentage of emojis by species"
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
      const chart = new Chart(ctx, myChart)
      }});
}

export default (state, props) => 
h('div', {class:'chartStyle'}, [
		TheChart2({values:state.myValues, labels:state.myLabels, background:state.myBG}),
    ]
);