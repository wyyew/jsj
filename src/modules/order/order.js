import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import WrappedAddOrder from './addOrder/addorder'

render(<WrappedAddOrder />, document.querySelector('#addorder'))
