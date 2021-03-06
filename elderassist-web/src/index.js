import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'react-redux';

import reducers from './reducers';

import NotificationList from './pages/NotificationList';
import Test from './pages/TestPage';

// const store = createStore(reducers, {}, applyMiddleware);
ReactDOM.render(
  // <Provider store={store}>
    <NotificationList />
  // </Provider>
  ,
  document.getElementById('root')
);

