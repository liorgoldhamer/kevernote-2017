import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

fetch('http://localhost:3001/notes').then(r => r.json()).then(console.log);
