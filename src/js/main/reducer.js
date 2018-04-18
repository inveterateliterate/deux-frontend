import { combineReducers } from 'redux'
import {
  reducer as homeReducer,
  reducerKey as homeReducerKey,
} from './home'

import {
  reducer as weeksReducer,
  reducerKey as weeksReducerKey,
} from './weeks'

import {
  reducer as daysReducer,
  reducerKey as daysReducerKey,
} from './days'

import {
  reducer as runningExercisesReducer,
  reducerKey as runningExercisesReducerKey,
} from './runningExercises'

const reducerKey = 'root'

const reducer = combineReducers({
  [homeReducerKey]: homeReducer,
  [weeksReducerKey]: weeksReducer,
  [daysReducerKey]: daysReducer,
  [runningExercisesReducerKey]: runningExercisesReducer,
})

export { reducer, reducerKey }
