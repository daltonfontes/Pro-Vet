import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import './index.css'

import Base from "./styles/elements/Base";
import rootReducer from './redux-flow/recucers/index'
import thunk from 'redux-thunk'
import Routes from './routes'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk, logger)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
      <Base />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
