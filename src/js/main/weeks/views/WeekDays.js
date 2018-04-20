import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { selectors } from '../reducer'
import { Days } from '../../days/views'
import { waitFor } from 'lp-hoc'
import * as Types from 'types'

const propTypes = {
  week: Types.week.isRequired,
}

const defaultProps = {}

function WeekDays({
  week: { id, num },
}) {
  return (
    <div>
      <h1>Week { num }</h1>
      <Days weekId={ id } />
    </div>
  )
}

WeekDays.propTypes = propTypes

WeekDays.defaultProps = defaultProps

function mapStateToProps (state, { params: { id }}) {
  return {
    week: selectors.currentWeek(state, id)
  }
}

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  waitFor('week')
)(WeekDays)
