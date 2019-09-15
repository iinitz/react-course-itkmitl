import React, { useContext } from 'react'

import Input from './Input'
import UsersDataContext from '../contexts/UsersDataContext'

const UsersSearchBox = () => {
  const { search, setSearch } = useContext(UsersDataContext)
  const handleInputChange = (val) => {
    setSearch(val)
  }
  return (
    <Input type="text" value={search} onChange={handleInputChange} />
  )
}

export default UsersSearchBox
