import reportWebVitals from './reportWebVitals';
import posts, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addPost} from './redux/state';

let rerender = (posts) => {
  ReactDOM.render(
    <BrowserRouter>
      <App posts={posts} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerender(posts);
subscribe(rerender)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
