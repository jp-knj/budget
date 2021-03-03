import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

// Pages
import Login from './pages/Login'
import Logout from './pages/Logout'
import Statistics from './pages/Statistics'
import Transaction from './pages/Transaction'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/statistics' component={Statistics} />
        <Route path='/transaction' component={Transaction} />
      </Switch>
    </Fragment>
  )
}

export default App;
