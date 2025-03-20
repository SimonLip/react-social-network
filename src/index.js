import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let data = {
  dialogs :[
    { id: 1, name: 'Stas' },
    { id: 2, name: 'Illia' },
    { id: 3, name: 'Valera' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Oxana' }
  ],

  messages :[
    { id: 1, message: "Hi" },
    { id: 2, message: "Homie" },
    { id: 3, message: "We coo?" },
    { id: 4, message: "Sup!" },
    { id: 5, message: "How are you?" }
  ],

   postData :[
    { id: 1, message: "It's my first post!", likesCount: 20 },
    { id: 2, message: "Hi, how are you?", likesCount: 15 }
  ],
};

root.render(
  <BrowserRouter>
    <App data={data} />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
