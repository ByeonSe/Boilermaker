import { combineReducers } from 'redux'
import dummyReducer from './dummy'

const appReducer = combineReducers({
  dummyReducer: dummyReducer
})

export default appReducer