import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { onMount, modifyProps } from 'lp-hoc'
import { selectors } from '../reducer'
import { DayCard } from '../components'
import * as Types from 'types'
import * as apiActions from 'api-actions'

const propTypes = {
  days: PropTypes.arrayOf(Types.day).isRequired,
}

const defaultProps = {}

function Days({ days }) {
  return (
    <div>
      { days.map((day, i) => {
          return (
            <div key={ i }>
              <DayCard day={ day } />
            </div>
          )
        })
      }
    </div>
  )
}

Days.propTypes = propTypes

Days.defaultProps = defaultProps

function mapStateToProps(state) {
  return { days: selectors.days(state) }
}

const mapDispatchToProps = {
  fetchDays: apiActions.fetchDays
}

function modify({ fetchDays, weekId }) {
  return {
    fetchDays: () => fetchDays(weekId)
  }
}

export default compose(
  modifyProps(modify),
  connect(mapStateToProps, mapDispatchToProps),
  onMount('fetchDays')
)(Days)
