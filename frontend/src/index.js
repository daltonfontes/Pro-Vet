import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Reset from "./styles/generic/Reset";
import Base from "./styles/elements/Base";


ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
