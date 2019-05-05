import { h } from 'hyperapp'
import Chart from 'chart.js'


export const pieTemplate = (data) => {
	type: 'pie',
  data: {
    labels: data.labels, // => "Cat", "Dog", "Rabbit", "Bird", "Snake", "Fish", "Turtle", "Mouse"
    datasets: [{
      labels: "Pourcentage of emojis by species",
      backgroundColor: ['#3e95cd', '#f4ac41', '#8e5ea2', '#3cba9f', '#f46441', '#e8c3b9', '#c45850', '#1d15da'],
      borderColor: 'rgb(66, 134, 244)',
      data: data.values // our number of occurrence
    }]
  },
  options: {
    title: {
      display: true,
      text: "Pourcentage of emojis by species"
    },
}

export const horizontalBarTemplate = (data) => {
	type: 'horizontalBar',
  data: {
    labels: data.labels, // => "France", "Italy", "Germany", etc...
    datasets: [{
      labels: "Number of emojis included in tweets",
      backgroundColor: ['#3e95cd', '#f4ac41', '#8e5ea2', '#3cba9f', '#f46441', '#e8c3b9', '#c45850', '#1d15da'],
      borderColor: 'rgb(66, 134, 244)',
      data: data.values // our number of occurrence
    }]
  },
  options: {
  	legend: { display: false },
    title: {
      display: true,
      text: "Pourcentage of emojis by country"
    },
}