import React from 'react'
import PropTypes from 'prop-types'
import ListMenuItem from './ListMenuItem'

const ListMenu = (props) => {
  const { items } = props
  const menuItems = items.map(item => <ListMenuItem key={item.title} title={item.title} link={item.link} />)
  return (
    <ul>
      {menuItems}
    </ul>
  )
}
ListMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })).isRequired,
}

export default ListMenu
