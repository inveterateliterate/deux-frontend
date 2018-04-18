import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { selectors } from '../reducer'
import { RunningExercises } from '../../runningExercises/views'
import { waitFor } from 'lp-hoc'
import * as Types from 'types'

const propTypes = {
  day: Types.day.isRequired
}

const defaultProps = {}

function DayExercises({
  day: { id, weekday }
}) {
  return (
    <div>
      <h1>Exercises for { weekday }</h1>
      <RunningExercises dayId={ id } />
    </div>
  )
}

DayExercises.propTypes = propTypes

DayExercises.defaultProps = defaultProps

function mapStateToProps (state, { params: { id }}) {
  return {
    day: selectors.currentDay(state, id)
  }
}

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  waitFor('day')
)(DayExercises)
