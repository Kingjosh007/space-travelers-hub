import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SpaceContainer from './components/SpaceContainer';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SpaceContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
