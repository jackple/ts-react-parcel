import * as React from 'react'
import Loadable from 'react-loadable'
import { hot } from 'react-hot-loader'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Error from './../components/Error'
import PageLoading from './../components/PageLoading'

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './../views/Home'),
  loading: PageLoading
})
const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ './../views/Login'),
  loading: PageLoading
})

// 权限控制
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      false ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route component={Error} />
    </Switch>
  </Router>
)

export default hot(module)(App)
