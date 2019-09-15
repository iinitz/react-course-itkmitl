import React from 'react'
import { Link } from 'react-router-dom'

const UsersTable = () => {
  const users = []
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

export default UsersTable
