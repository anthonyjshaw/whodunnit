import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter}  from 'react-router-dom';
import './index.css';
import App from './App';
import Intro from './components/Intro/Intro';
import reportWebVitals from './reportWebVitals';

const strings = ['The year is 1954.<br/>Lord Astley of Marberry is dead.<br/>You are a private investigator.<br/>Find the culprit.<br/>You have six suspects:'];

const root = document.getElementById('root');
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
