import React from 'react'
// import PropTypes from 'prop-types'
import jumping from '../../../../images/jumping.jpg'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { WEEKS_ROUTE } from 'config'

const propTypes = {}

const defaultProps = {}

function Home () {
  return (
    <div>
      <h1> DEUX </h1>
      <h3> Round 2 of Coach Lauren's Training Program </h3>
      <img src={jumping} />
      <div>
        <Link to={ WEEKS_ROUTE } className="button-primary home-button">
          Go To Workouts
        </Link>
      </div>
    </div>
  )
}

Home.propTypes = propTypes

Home.defaultProps = defaultProps

function mapStateToProps () {
  return {}
}

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Home)
