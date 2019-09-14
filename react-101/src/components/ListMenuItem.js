import React from 'react'
import PropTypes from 'prop-types'

const ListMenuItem = (props) => {
  const { title, link } = props
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  )
}
ListMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default ListMenuItem
