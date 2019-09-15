import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { onClick, children } = props
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  )
}
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}
Button.defaultProps = {
  onClick: () => {},
  children: null,
}

export default Button
