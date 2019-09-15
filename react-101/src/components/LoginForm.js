import React from 'react'
import Input from './Input'

const LoginForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleSubmit = () => {
    console.log('submit', { username, password })
  }
  return (
    <form>
      <p>
        Username: <Input
          type="text"
          value={username}
          onChange={setUsername}
        />
      </p>
      <p>
        Password: <Input
          type="password"
          value={password}
          onChange={setPassword}
        />
      </p>
      <button type="button" onClick={handleSubmit}>Login</button>
    </form>
  )
}

export default LoginForm
