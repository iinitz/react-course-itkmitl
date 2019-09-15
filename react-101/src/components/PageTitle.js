import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const PageTitle = (props) => {
  const { title } = props
  return (
    <h1>{title}</h1>
  )
}
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default withRouter(PageTitle)
