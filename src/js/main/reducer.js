import { combineReducers } from 'redux'
import {
  reducer as homeReducer,
  reducerKey as homeReducerKey,
} from './home'

import {
  reducer as weeksReducer,
  reducerKey as weeksReducerKey,
} from './weeks'

const reducerKey = 'root'

const reducer = combineReducers({
  [homeReducerKey]: homeReducer,
  [weeksReducerKey]: weeksReducer,
})

export { reducer, reducerKey }
