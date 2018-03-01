import PropTypes from 'prop-types'

export const runnable = PropTypes.shape({
  id: PropTypes.number.isRequired,
  amt_time: PropTypes.number,
  num_times: PropTypes.number,
  time_per: PropTypes.number,
  distance: PropTypes.string,
  rest_between: PropTypes.number,
  rep_seconds_rest: PropTypes.number,
  round_minutes_rest: PropTypes.number,
  round_order: PropTypes.number,
  int_yds: PropTypes.number,
  int_time: PropTypes.number,
})

export const dayRunningExercise = PropTypes.shape({
  id: PropTypes.number.isRequired,
  day_id: PropTypes.number.isRequired,
  runnable: PropTypes.arrayOf(runnable)
})

export const day = PropTypes.shape({
  id: PropTypes.number.isRequired,
  day_index: PropTypes.number.isRequired,
  day_running_exercises: PropTypes.arrayOf(dayRunningExercise),
  // resistance_exercises: PropTypes.arrayOf(dayResistanceExercise),
})

export const week = PropTypes.shape({
  id: PropTypes.number.isRequired,
  num: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
})
