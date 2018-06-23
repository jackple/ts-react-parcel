import * as React from 'react'
import { hot } from 'react-hot-loader'

import Hello from './../../components/Hello'
import World from './../../components/World'

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Hello />
        <World />
      </div>
    )
  }
}

export default hot(module)(Home)
