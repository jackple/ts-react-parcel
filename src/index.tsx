import './styles/app.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { configure } from 'mobx'

import App from './router'
import store from './store'

// mobx strict mode
configure({ enforceActions: true })

const render = Component => {
  ReactDOM.render(
    <Provider {...store}>
      <Component />
    </Provider>,
    document.getElementById('app') as HTMLElement
  )
}

render(App)
