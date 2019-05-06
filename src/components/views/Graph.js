import {h} from 'hyperapp'

const Graph = (props)=>{
  const nbTweet= 200
  var toGraph=[]
  const T = props.Twit //pour faire court
  props.pets.forEach(function(pet){
    if !pet.selected return
    var query = pet.emoticon.join(' OR ')
    const param = {
      q: query,
      count: nbTweet
    }
    toGraph.push(pet.name)
    T.get('search/tweets',param, adToGraph)
    }
  })
  return
}
function adToGraph(err,data,response){
  toGraph.push(data.length)
}
