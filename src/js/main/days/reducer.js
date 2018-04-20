import { handleActions } from 'redux-actions'
import { selectorForSlice } from 'lp-redux-utils'
import { setFromRequest } from 'lp-redux-api'
import { REQ_DAYS } from 'api-actions'

const reducerKey = 'days'
const slice = 'root.days'

const initialState = {}

const reducer = handleActions({
  ...setFromRequest(REQ_DAYS, 'days'),
}, initialState)

const select = selectorForSlice(slice)

const selectors = {
  days: select('days.success', [])
}

selectors.currentDay = function(state, id) {
  const days = selectors.days(state)
  return days.find(day => day.id === Number(id))
}

export { reducer, selectors, reducerKey }
