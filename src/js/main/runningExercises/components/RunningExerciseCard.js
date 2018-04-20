import React from 'react'
import PropTypes from 'prop-types'
import * as Types from 'types'
import { map, startCase } from 'lodash'

const propTypes = {
  // run: Types.runnable.isRequired,
  status: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
}

const defaultProps = {}

function RunningExerciseCard({ run, status, type }) {
  return (
    <div className="box running-block">
      <h3> { startCase(type) } </h3>
      <h4> Status: { status ? 'Completed' : 'Incomplete' } </h4>
      { map(run, (value, key) => {
          if (key == 'id') return
          return <div>
            <p>{ startCase(key) }: { value }</p>
          </div>
        }
      )}
    </div>
  )
}

RunningExerciseCard.propTypes = propTypes
RunningExerciseCard.defaultProps = defaultProps

export default RunningExerciseCard
