import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// dummy reducer
import appReducer from './redux/index'

const store = createStore(
    appReducer,
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  );
  
  export default store;