inport { h } form 'hyperapp'
var config = require('../actions/config');

const GraphLangue=(ISO, props)=>{
  const nbTweet=100
  var toGraph={
    type: 'horizontalBar',
    data:{
      labels:[],
      datasets:[{
        labels: "Number of emojis included in tweets",
        borderColor: 'rgb(0, 0, 0)',
        data:[]
      }]
    }
  }
  const T = new Twit(config)
  props.pets.forEach(function(pet){
    if !pet.selected return
    const query= pet.emoticon.join(' OR ')
    const param = {
      q: query,
      count: nbTweet,
      lang: ISO
    }
    //toGraph.push(pet.name)
    toGraph.labels.push(ISO)
    T.get('search/tweets',param,adToGraphlang)
  })
  return toGraph
}
funcion adToGraphlang(err,data, response){
  toGraph.data.datasets.data.push(data.statuses.length)
}
