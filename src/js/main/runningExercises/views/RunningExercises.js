import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { onMount, modifyProps } from 'lp-hoc'
import { selectors } from '../reducer'
import { RunningExerciseCard } from '../components'
import * as Types from 'types'
import * as apiActions from 'api-actions'

const propTypes = {
  runs: PropTypes.arrayOf(Types.dayRunningExercise).isRequired,
}

const defaultProps = {}

function RunningExercises({ runs }) {
  return (
    <div>
      { runs.map((run, i) => {
          return (
            <div key={i}>
              <RunningExerciseCard
                run={ run.runnable[Object.keys(run.runnable)[1]] }
                status={ run.completed }
                type={ run.runnable.type }
              />
            </div>
          )
        })
      }
    </div>
  )
}

RunningExercises.propTypes = propTypes

RunningExercises.defaultProps = defaultProps

function mapStateToProps(state) {
  return { runs: selectors.runs(state) }
}

const mapDispatchToProps = {
  fetchDayRunningExercises: apiActions.fetchDayRunningExercises
}

function modify({ fetchDayRunningExercises, dayId }) {
  return {
    fetchDayRunningExercises: () => fetchDayRunningExercises(dayId)
  }
}

export default compose(
  modifyProps(modify),
  connect(mapStateToProps, mapDispatchToProps),
  onMount('fetchDayRunningExercises')
)(RunningExercises)
