import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import {Router, browserHistory, hashHistory} from 'react-router';

import reducers from './reducers';
import routes from './router';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
