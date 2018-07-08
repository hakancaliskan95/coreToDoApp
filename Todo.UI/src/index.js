import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "./css/index.css";

const container = document.getElementById('app');
container && ReactDOM.render(<App />, container);