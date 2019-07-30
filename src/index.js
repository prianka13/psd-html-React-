import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Body />, document.getElementById("body"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
