import { handleActions } from 'redux-actions'
import { selectorForSlice } from 'lp-redux-utils'
import { setFromRequest } from 'lp-redux-api'
import { REQ_WEEKS } from 'api-actions'
// import * as actions from './actions'
// import { get, set } from 'utils'

const reducerKey = 'weeks'
const slice = 'root.weeks'

const initialState = {}

const reducer = handleActions({
  ...setFromRequest(REQ_WEEKS, 'weeks'),
}, initialState)

const select = selectorForSlice(slice)

const selectors = {
  weeks: select('weeks.success', [])
}

export { reducer, selectors, reducerKey }
