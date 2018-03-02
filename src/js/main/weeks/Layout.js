import React from 'react'
import PropTypes from 'prop-types'
// import * as apiActions from 'api-actions'
// import { connect } from 'react-redux'
// import { compose } from 'redux'
// import { onMount } from 'lp-hoc'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const defaultProps = {}

function Layout ({ children }) {
  return (
    <div>
      { children }
    </div>
  )
}

Layout.propTypes = propTypes

Layout.defaultProps = defaultProps

// const mapDispatchToProps = {
//   fetchWeeks: apiActions.fetchWeeks
// }

// export default compose(
//   connect(null, mapDispatchToProps),
//   onMount('fetchWeeks')
// )
export default Layout
