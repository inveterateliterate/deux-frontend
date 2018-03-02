import React from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { selectors } from '../reducer'
import { DayCard } from '../components'
import { waitFor } from 'lp-hoc'
import * as Types from 'types'
// import * as actions from '../actions'

const propTypes = {
  week: Types.week.isRequired,
  // days: PropTypes.arrayOf(Types.day).isRequired,
}

const defaultProps = {}

function WeekDays({
  week: { num, days },
}) {
  return (
    <div>
      <h1>Week { num }</h1>
      { days.map((day, i) => {
          return (
            <div key={i}>
              <DayCard day={ day } />
            </div>
          )
        })
      }
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

const mapDispatchToProps = {
  // updateBranch: actions.updateBranch,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  waitFor('week')
)(WeekDays)
