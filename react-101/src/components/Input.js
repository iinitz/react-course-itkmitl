import React from 'react'

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

export default Input
