import { h } from 'hyperapp'
import Chart from 'chart.js'


export default (props) => {

  const {type, data, label} = props

  if (data == null || type == null || label == null) {
    return null
  }

	return h('canvas', {
	    oncreate: (element) => {
	       let ctx = element.getContext('2d');
	       let data = props.myData 
	       let chart = new Chart(ctx, {
	       	type: type,
	      	data: {
	        labels: data.labels,
	        datasets: [{
	          label: label,
	          backgroundColor: 'rgba(63, 127, 191, 1)',
	          data: data.value
	        }]
	      },
	      options: options
	       });
	    }
  })
}
