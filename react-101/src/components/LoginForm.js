import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
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
        {username === '' ? (<span>Required username</span>) : null}
      </p>
      <p id="password" className="input">
        Password: <Input
          type="password"
          value={password}
          onChange={setPassword}
        />
        {password === '' && (<span style={{ color: 'red', marginLeft: '10px' }}>Required password</span>)}
      </p>
      <Button onClick={handleSubmit}>Login</Button>
      {/* <button type="button" onClick={handleSubmit}>Login</button> */}
    </form>
  )
}

export default LoginForm
