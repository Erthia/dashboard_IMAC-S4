import {h} from 'hyperapp'

var config = require('../actions/config');
const Graph = (props)=>{
  const nbTweet= 200
  var toGraph={
    type: 'pie',
    labels:[],
    datasets:{
      labels: 'percentage of emojis by species',
      data: []
    }
    }
  const T = new Twit(config)
  props.pets.forEach(function(pet){
    if !pet.selected return
    var query = pet.emoticon.join(' OR ')
    const param = {
      q: query,
      count: nbTweet
    }
    //toGraph.push(pet.name)
    T.get('search/tweets',param, adToGraph)
    toGraph.labels.push(pet.name)
    }
  })
  return toGraph
}
function adToGraph(err,data,response){
  toGraph.datasets.data.push(data.statuses.length)
}
