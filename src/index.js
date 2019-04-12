import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { combineReducers, createStore } from 'redux';
import loginReducer from './reducers/login-reducer';
import dashboardReducer from './reducers/dashboard-reducer';

import { Provider } from 'react-redux';

const allReducers = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer
});

const store = createStore(allReducers);

// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
