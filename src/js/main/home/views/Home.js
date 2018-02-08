import React from 'react'
// import PropTypes from 'prop-types'
import jumping from '../../../../images/jumping.jpg'
import { compose } from 'redux'
import { connect } from 'react-redux'

const propTypes = {}

const defaultProps = {}

function Home () {
  return (
    <div>
      <h1> DEUX </h1>
      <h3> Round 2 of Coach Lauren's Training Program </h3>
      <img src={jumping} />
      <div>
        <button className="button-primary home-button">
          Go To Workouts
        </button>
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
