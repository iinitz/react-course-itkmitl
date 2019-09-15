import React, { Fragment } from 'react'

const UserDetailPage = (props) => {
  console.log(props)
  const user = {}
  return (
    <Fragment>
      <h1>User detail, userId: {props.match.params.userId}</h1>
      <h3>ID: {user.id}</h3>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Role: {user.role}</h3>
      <h3>Active: {user.active}</h3>
    </Fragment>
  )
}

export default UserDetailPage
