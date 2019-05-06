inport { h } form 'hyperapp'

const GraphLangue=(ISO, props)=>{
  const nbTweet=100
  var toGraph=[]
  const T = props.Twit
  props.pets.forEach(function(pet){
    if !pet.selected return
    const query= pet.emoticon.join(' OR ')
    const param = {
      q: query,
      count: nbTweet,
      lang: ISO
    }
    toGraph.push(pet.name)
    T.get('search/tweets',param,adToGraphlang)
  })
  return //graph
}
funcion adToGraphlang(err,data, response){
  toGraph.push(data.status.length)
}
