import React, { useState, useEffect } from 'react'

import PageTitle from '../components/PageTitle'
import UsersSearchBox from '../components/UsersSearchBox'
import UsersTable from '../components/UsersTable'
import UsersDataContext from '../contexts/UsersDataContext'

const UsersPage = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true)
      const response = await fetch('http://localhost:8000/users')
      const data = await response.json()
      setUsers(data)
      setLoading(false)
    }
    getUsers()
  }, [])
  if (loading) {
    return (
      <h3>Loading ...</h3>
    )
  }
  return (
    <UsersDataContext.Provider value={{
      users, loading, search, setSearch,
    }}
    >
      <PageTitle title="Users" />
      <UsersSearchBox />
      <UsersTable />
    </UsersDataContext.Provider>
  )
}

export default UsersPage
