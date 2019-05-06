import { h } from 'hyperapp'

export default (props) =>{
return h('body',[
  h('header','Pet Distribution by Language'),
  h('div',[
    //iso 639-1 alpha-2
    GraphByLanguage('fr','Francais', props),
    GraphByLanguage('en','Englais',props)
  ],null)
], null)
}

/*  <div>
    <header>
      <h1>Countries and pets emojis</h1>
    </header>
  </div>*/
