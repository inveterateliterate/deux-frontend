import PropTypes from 'prop-types'

export const runnable = PropTypes.shape({
  id: PropTypes.number.isRequired,
  amtTime: PropTypes.number,
  numTimes: PropTypes.number,
  timePer: PropTypes.number,
  distance: PropTypes.string,
  restBetween: PropTypes.number,
  repSecondsRest: PropTypes.number,
  roundMinutesRest: PropTypes.number,
  roundOrder: PropTypes.number,
  intYds: PropTypes.number,
  intYime: PropTypes.number,
})

export const dayRunningExercise = PropTypes.shape({
  id: PropTypes.number.isRequired,
  dayId: PropTypes.number.isRequired,
  runnable: PropTypes.arrayOf(runnable)
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
