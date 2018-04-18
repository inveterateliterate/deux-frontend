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
  console.log(runs)
  return (
    <div>
      { runs.map((day, i) => {
          return (
            <div key={i}>
              <RunningExerciseCard run={ day.runnable } />
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
