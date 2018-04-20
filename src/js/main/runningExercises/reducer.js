import { handleActions } from 'redux-actions'
import { selectorForSlice } from 'lp-redux-utils'
import { setFromRequest } from 'lp-redux-api'
import { REQ_RUNS } from 'api-actions'

const reducerKey = 'runningExercises'
const slice = 'root.runningExercises'

const initialState = {}

const reducer = handleActions({
  ...setFromRequest(REQ_RUNS, 'runningExercises'),
}, initialState)

const select = selectorForSlice(slice)

const selectors = {
  runs: select('runningExercises.success', [])
}

selectors.currentRunningExercise = function(state, id) {
  const runs = selectors.runs(state)
  return runs.find(run => run.id === Number(id))
}

export { reducer, selectors, reducerKey }
