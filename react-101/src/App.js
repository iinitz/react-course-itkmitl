import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/users" component={UsersPage} />
    </Switch>
  </BrowserRouter>
)

export default App
