import PropTypes from 'prop-types'

export const longRun = PropTypes.shape({
  id: PropTypes.number.isRequired,
  amtTime: PropTypes.number.isRequired,
})

export const hundred = PropTypes.shape({
  id: PropTypes.number.isRequired,
  numTimes: PropTypes.number.isRequired,
})

export const mileRun = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  numTimes: PropTypes.number.isRequired,
  timePer: PropTypes.number.isRequired,
  restBetween: PropTypes.number.isRequired,
})

export const speedTraining = PropTypes.shape({
  id: PropTypes.number.isRequired,
  numTimes: PropTypes.number.isRequired,
  distance: PropTypes.string.isRequired,
  repSecondsRest: PropTypes.number.isRequired,
  roundMinutesRest: PropTypes.number.isRequired,
  roundOrder: PropTypes.number.isRequired,
})

export const suicide = PropTypes.shape({
  id: PropTypes.number.isRequired,
  numTimes: PropTypes.number.isRequired,
  intYds: PropTypes.number,
  intYime: PropTypes.number,
  roundMinutesRest: PropTypes.number.isRequired,
})

export const runnable = PropTypes.shape({
  // id: PropTypes.number.isRequired,
  type: PropTypes.string,
})

export const dayRunningExercise = PropTypes.shape({
  id: PropTypes.number.isRequired,
  day: PropTypes.objectOf(day),
  // runnable: PropTypes.objectOf(runnable)
})

export const day = PropTypes.shape({
  id: PropTypes.number.isRequired,
  weekday: PropTypes.string.isRequired,
  dayRunningExercises: PropTypes.arrayOf(dayRunningExercise),
  // resistance_exercises: PropTypes.arrayOf(dayResistanceExercise),
})

export const week = PropTypes.shape({
  id: PropTypes.number.isRequired,
  num: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  days: PropTypes.arrayOf(day),
})
