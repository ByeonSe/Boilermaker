import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './components/Routes';

// establishes socket connection
import './socket'

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app") // make sure this is the same as the id of the div in your index.html
);