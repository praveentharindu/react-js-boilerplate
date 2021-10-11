/* eslint-disable indent */
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import { rootReducer } from './rootReducer';

const additionalEnhancers = [];
// optional injected dependencies for any logic
export const dependencies = {
  isTrackingInit: false,
  trackingPath: '',
  // Here >> add anything you need to have available in your logic
  _dispatch: null
};

let middleware = [];

if (process.env.REACT_APP_ENVIRENMENT === 'local') {
  middleware = [...middleware, thunk];
} else {
  middleware = [...middleware, thunk];
}

const reduxDevToolsAvailable =
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined';

if (reduxDevToolsAvailable && process.env.REACT_APP_ENVIRENMENT === 'local') {
  additionalEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

// using compose to allow for applyMiddleware, just add it in
const middlewares = applyMiddleware(...middleware);
const enhancer = compose(middlewares, ...additionalEnhancers);

export const store = createStore(rootReducer(dependencies.history), enhancer);
dependencies._dispatch = store.dispatch;
