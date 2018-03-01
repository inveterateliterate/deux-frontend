import { handleActions } from 'redux-actions'
// import { selectorForSlice } from 'lp-redux-utils'

const reducerKey = 'days'
const slice = 'root.days'

const initialState = {}

const reducer = handleActions({}, initialState)

// const select = selectorForSlice(slice)

const selectors = {}

export { reducer, selectors, reducerKey }
