import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider  } from 'react-redux'

import Reset from "./styles/generic/Reset";
import Base from "./styles/elements/Base";
import rootReducer from './redux-flow/recucers/index'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Reset />
    <Base />
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
