import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore } from 'redux'

import getRoute from './route'
const store = createStore(reducers, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
   { getRoute()}
  </Provider>,
  document.querySelector('#home')
)
