import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Pages
import Navigation from './pages/Navigation'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Statistics from './pages/Statistics'
import Transaction from './pages/Transaction'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Fragment>
      <Navigation>
        <Switch>
          {/* Public */}
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          {/* Private */}
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/statistics' component={Statistics} />
          <Route path='/transaction' component={Transaction} />
          <Route path='/profile' component={Profile} />
          {/* Redirect */}
          <Redirect from='/' exact to='/dashboard' />
          <Redirect to='/not-found' />
        </Switch>
       </Navigation>
    </Fragment>
  )
}

export default App;
