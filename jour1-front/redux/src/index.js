import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// installer bootstrap dans notre projet !! 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 

// paramètres pour mettre en place redux 

import { Provider } from "react-redux";
import { applyMiddleware , createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"

import reducer from "./reducers";
import { getArticles } from './action/article';

const store = createStore(
  reducer ,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getArticles());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
