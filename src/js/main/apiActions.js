import { requestWithKey } from 'lp-redux-api'

export const REQ_WEEKS = 'REQ_WEEKS'
export const REQ_DAYS = 'REQ_DAYS'

export function fetchWeeks() {
  return requestWithKey(REQ_WEEKS, { url: '/weeks' })
}

export function fetchDays() {
  return requestWithKey(REQ_DAYS, { url: '/days' })
}
