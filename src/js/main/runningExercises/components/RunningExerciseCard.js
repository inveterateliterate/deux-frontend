import React from 'react'
// import * as Types from 'types'

const propTypes = {
  // day: Types.day.isRequired,
}

const defaultProps = {}

function RunningExerciseCard ({
  runs: { id, status },
}) {
  return (
    <div className="box running-block">
    <p> A Run </p>
    </div>
  )
}

RunningExerciseCard.propTypes = propTypes
RunningExerciseCard.defaultProps = defaultProps

export default RunningExerciseCard
