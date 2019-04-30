import {h} from 'hyperapp'

const Liste = (props) => {
  return h('div',[
    for (object pet : props ){
      h('input',null,{type: "checkbox", id: pet.name, name: pet.name,
      (pet)=>{//peut se remplacer par une ternaire
        if(pet.selected)
         return "checked"
      }
    })
      h('label', props.name, {for: props.name})
    }
  ],'list')
}
