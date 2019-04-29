import { h, app } from 'https://unpkg.com/hyperapp?module'

import actions from './actions'
import state from './state'
import view from './components/views/testPage'

// call to hyperapp app application
app(
  state,
  actions,
  view,
  document.body
)
