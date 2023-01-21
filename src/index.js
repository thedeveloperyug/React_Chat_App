<<<<<<< HEAD
import ReactDom from 'react-dom';
import App from './App';
import './index.css'
import'./message.scss'

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
=======

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './message.scss';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
    <App />
//   </React.StrictMode>
);
>>>>>>> master
