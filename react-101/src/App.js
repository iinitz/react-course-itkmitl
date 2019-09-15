import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import NotFoundPage from './pages/NotFoundPage'
import UserDetailPage from './pages/UserDetailPage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/users" component={UsersPage} exact />
      <Route path="/users/:userId" component={UserDetailPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default App
