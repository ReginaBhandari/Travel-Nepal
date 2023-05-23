import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import axios from 'axios';
import "./public";
import store from './store/store';

axios.defaults.headers.common['Authorization']= `Bearer ${localStorage.getItem('Token')}`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
