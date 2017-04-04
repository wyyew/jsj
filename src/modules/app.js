// application's entry

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { Router, browserHistory, Link } from 'react-router';
import reducers from 'reducers/index';
import '../css/common.scss';

import TestRoute  from './home/route'

// class NavList extends Component {
//   render() {
//     return (
//       <div>
//         <div className="header">
//           // <Link to="page1">page1</Link>
//           // <Link to="page2">page2</Link>
//           // <Link to="page3">page3</Link>
//         </div>
//         {this.props.children}
//       </div>
//     );
//   }
// };
const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
    {TestRoute()}
  </Provider>
), document.getElementById('app'));
