import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
  <h1>Home <Link to="/users">to users</Link></h1>
)

export default HomePage
