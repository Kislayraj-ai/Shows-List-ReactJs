import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ShowTypeProvider } from './hooks/use-showContext';

ReactDOM.render(
  <ShowTypeProvider>
    <App />
  </ShowTypeProvider>,
  document.getElementById('root')
);
