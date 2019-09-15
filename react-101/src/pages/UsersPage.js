import React, { Fragment, useState, useEffect } from 'react'
import UsersSearchBox from '../components/UsersSearchBox'
import UsersTable from '../components/UsersTable'

const UsersPage = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
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
    <Fragment>
      <UsersSearchBox />
      <UsersTable />
    </Fragment>
  )
}

export default UsersPage
