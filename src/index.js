import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(reducer/*, applyMiddleware(sagaMiddleware)*/);


ReactDOM.render(
  <Provider store = { store }>
     <App/>
  </Provider>,document.getElementById('root')
);

serviceWorker.unregister();
