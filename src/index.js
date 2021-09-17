import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import './styles/index.css';
import Main from './components/Main';
import Nav from './components/Nav';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Nav />
      <Main />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);