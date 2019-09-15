import React, { useState, useEffect } from 'react'

const UsersPage = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    console.log('fetch data')
    const getUsers = async () => {
      setLoading(true)
      const response = await fetch('http://localhost:8000/users')
      const data = await response.json()
      console.log(data)
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
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.active ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UsersPage
