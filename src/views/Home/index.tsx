import * as React from 'react'

import Hello from './../../components/Hello'
import World from './../../components/World'

export default class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Hello />
        <World />
      </div>
    )
  }
}
