import React from 'react'
import PropTypes from 'prop-types'

const ListMenu = (props) => {
  const { items } = props
  const menuItems = items.map(item => <li key={item.title}>{item.title}</li>)
  return (
    <ul>
      {menuItems}
    </ul>
  )
}
ListMenu.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ListMenu
