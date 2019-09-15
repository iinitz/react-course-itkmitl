import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
  const { type, value, onChange } = props
  const handleInputChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <input
      type={type}
      value={value}
      onChange={handleInputChange}
    />
  )
}
Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
}
Input.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
}

export default Input
