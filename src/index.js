import React from 'react';
import ReactDOM from 'react-dom';
import ApiFetch from './ApiFetch';
import Axios from './Axios';
import './index.css';
import Prac from './Prac';
import reportWebVitals from './reportWebVitals';
import Star from './Star';

ReactDOM.render(
  <React.StrictMode>
    <Star/>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
