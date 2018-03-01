import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'

const propTypes = {}

const defaultProps = {}

function Days () {
  return (
    <div> This is the Days view! </div>
  )
}

Days.propTypes = propTypes

Days.defaultProps = defaultProps

function mapStateToProps (state) {
  return {}
}

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Days)
