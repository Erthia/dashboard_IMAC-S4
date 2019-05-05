import { h } from 'hyperapp'
import Chart from 'chart.js'


export default (props) => {

  const {myChart} = props

  if (myChart == null) {
    return null
  }

  const onLoad = (element) => {
    const ctx = element.getContext('2d')
    const newChart = new Chart(ctx, myChart)
  }

	return (
		<div>
			<canvas width ={200} height={200} oncreate={onLoad}/>
		</div>
	)
}
