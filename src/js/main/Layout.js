import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { onError } from 'lp-hoc'

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

function onComponentDidCatch (props, error, errorInfo) {}

export default compose(
  // onError(onComponentDidCatch),
)(Layout)
