import { h } from 'hyperapp'
import Chart from 'chart.js'
import ChartLabels from 'chartjs-plugin-labels';
import {PieTemplate, HorizontalBarTemplate} from './ChartsTemplate'


let myValues = [2, 1, 5, 2, 0, 3, 5];
let myLabels =  ['🐶', '🐰', '🐱', '🐍', '🐠', '🐭', '🐥'];
let myBG = ['#3e95cd', '#f4ac41', '#8e5ea2', '#3cba9f', '#f46441', '#e8c3b9', '#c45850', '#1d15da', '#3e95cd'];

// USING TEMPLATE, CURRENTLY NOT WORKING BECAUSE OF ??? 

const TheChart0 = (props) => {
	const myChart = props
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d');
      const chart = new Chart(ctx, myChart)
      }});
}

//UGLY CODE NOT USING THE TEMPLATE BUT WORKING

const BarChart = (props) => {
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

const PieChart = (props) => {
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
  		position: 'top',
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


export default () => 
	h('div', {id:'pieChart'}, [
		h('h2', {}, 'PIE CHART'),
		PieChart({values:myValues, labels:myLabels, background:myBG}),
    //TheChart0(pieTemplate({values:[1, 10, 5, 2, 20, 30, 45, 7]})),
    h('h2', {}, 'COUNTRY CHART'),
    BarChart({values:[1, 10, 5, 2, 20, 30, 45, 6, 8, 9]}),
    ]
);
/*
export default (props) => 
	h('div', {}, [
	h('h2', {}, ['PIE CHART', null, 'COUNTRY CHART'][props.currentPage]),
		TheChart2({values:[25, 10, 5, 2, 20, 30, 5]}),
    //TheChart0({pieTemplate(values:[1, 10, 5, 2, 20, 30, 45, 7])}),
    TheChart({values:[1, 10, 5, 2, 20, 30, 45]}),

 <div>
    <h2>PIE CHART</h2>
    <TheChart mychart = {pieTemplate(values:{[0, 10, 5, 2, 20, 30, 45, 7]})}  />
  </div>*/