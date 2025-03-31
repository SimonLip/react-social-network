import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App
                state={state}
                store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
