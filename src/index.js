import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mystore from './redux/my-store';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './components/StoreContext';
//import store from './redux/store'
import renderEntireTree from "./render";

renderEntireTree();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
