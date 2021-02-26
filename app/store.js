// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import axios from 'axios'
// import { composeWithDevTools } from 'redux-devtools-extension'
// // dummy reducer
// import appReducer from './redux/index'

// let middleware = [
//     // `withExtraArgument` gives us access to axios in our async action creators!
//     // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
//     thunkMiddleware.withExtraArgument({ axios }),
//   ]

// if (process.browser) {
//     // We'd like the redux logger to only log messages when it's running in the
//     // browser, and not when we run the tests from within Mocha.
//     middleware = [...middleware, createLogger({ collapsed: true })]
//   }

// const store = createStore(
//     appReducer,
//     applyMiddleware(
//       thunkMiddleware,
//     // 👇 This uses the Redux DevTools extension, assuming you have it installed in your browser.
//     // 👇 See: https://github.com/zalmoxisus/redux-devtools-extension
//       composeWithDevTools(applyMiddleware(...middleware))
//     )
//   );
  
//   export default store;

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import appReducer from './redux/index'


const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(appReducer, middleware)

export default store
