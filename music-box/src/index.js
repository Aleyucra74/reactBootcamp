import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import './assets/css/reset.css';
import Inicial from './pages/Inicial';
import MinhasMusicas from './pages/MinhasMusicas';

ReactDOM.render(
  <React.StrictMode>
    <MinhasMusicas />
  </React.StrictMode>,
  document.getElementById('root')
);