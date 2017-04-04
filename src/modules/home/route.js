import React, { Component } from 'react'
import { Router, browserHistory, Route, IndexRoute} from 'react-router'


import Main from './containerMain'
import Home from './componentHome'
import Profile from './componentProfile'

export default () => (
  <Router history={browserHistory} >
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/profile/:username" component={Profile} />
    </Route>
</Router>
)
