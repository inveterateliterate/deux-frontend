import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { onMount } from 'lp-hoc'
import { selectors } from '../reducer'
import { WEEKS_ROUTE } from 'config'
import { Link } from 'react-router'
// import { WeekCard } from '../components'
// import { SectionTitle } from 'components'
import * as Types from 'types'
import * as apiActions from 'api-actions'

const propTypes = {
  weeks: PropTypes.arrayOf(Types.week).isRequired,
}

const defaultProps = {}

function Weeks({ weeks }) {
  return (
    <div>
      <h1>Weeks</h1>
      { weeks.map((week, i) => {
          return (
            <div key={i}>
              <Link to={ `${WEEKS_ROUTE }/${week.id}/days` } >
                Week { i + 1 }
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

Weeks.propTypes = propTypes

Weeks.defaultProps = defaultProps

function mapStateToProps(state) {
  return { weeks: selectors.weeks(state) }
}

const mapDispatchToProps = {
  fetchWeeks: apiActions.fetchWeeks,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  onMount('fetchWeeks')
)(Weeks)
