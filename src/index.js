import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText } from './redux/state';
import { subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App
                updateNewPostText={updateNewPostText}
                state={state}
                addPost={addPost}
            />
        </BrowserRouter>
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
