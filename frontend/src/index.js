import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider  } from 'react-redux'
import './index.css'

import Base from "./styles/elements/Base";
import rootReducer from './redux-flow/recucers/index'
import thunk from 'redux-thunk'
import Routes from './routes'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Routes/>
    <Base />
  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
