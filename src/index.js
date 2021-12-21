import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import SpaceContainer from './component/SpaceContainer';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SpaceContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
