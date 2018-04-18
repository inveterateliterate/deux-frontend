import { requestWithKey } from 'lp-redux-api'

export const REQ_WEEKS = 'REQ_WEEKS'
export const REQ_DAYS = 'REQ_DAYS'
export const REQ_RUNS = 'REQ_DAYS'

export function fetchWeeks() {
  return requestWithKey(REQ_WEEKS, { url: '/weeks' })
}

export function fetchDays(weekId) {
  return requestWithKey(REQ_DAYS, { url: '/days',
    query: {
      weekId: weekId.weekId
    }
  })
}

export function fetchDayRunningExercises(dayId) {
  return requestWithKey(REQ_RUNS, { url: '/day_running_exercises',
    query: {
      dayId: dayId.dayId
    }
  })
}
