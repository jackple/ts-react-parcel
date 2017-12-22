/**
 * 组件lazyload
 */
import * as React from 'react'

interface States {
  Component: typeof React.Component
}

export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component<{}, States> {
    constructor(props) {
      super(props)
      this.state = {
        Component: null
      }
    }

    async componentWillMount() {
      if (!this.state.Component) {
        try {
          const Component: typeof React.Component = await getComponent()
          this.setState({
            Component
          })
        } catch (err) {
          console.error(err)
        }
      }
    }

    render() {
      const { Component } = this.state
      if (Component) {
        return <Component { ...this.props} />
      }
      return null
    }
  }
}

