import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Active</th>
          <th>Detail</th>
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
            <td><Link to={`/users/${user.id}`}>View detail</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UsersPage
