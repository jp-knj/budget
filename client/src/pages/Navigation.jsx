import React, {Fragment} from 'react'

import { NavLink, withRouter } from 'react-router-dom';

// Material-UI Icon
import { Add } from '@material-ui/icons'

// Material-UI Core
import { MenuItem, MenuList, ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Component
// import TransactionForm from '../components/TransactionForm'

const Navigation = ({ children }) => {
  const useStyles = makeStyles(() => ({
    addCircleIcon: {
      color: 'white'
    }
  }))
  const classes = useStyles();
  return (
    <Fragment>
    <div className="sidebar">
      <h3>Friday, 5 March</h3>
      <h4>Good Morning</h4>
      <h1>Kenji Tomita</h1>

      <nav className="navigation">
        <MenuList>
          <MenuItem
            to="/dashboard"
            component={NavLink}
          >
            <ListItemIcon>DashBoard</ListItemIcon>
          </MenuItem>
          <MenuItem
            to="/transaction"
            component={NavLink}
          >
            <ListItemIcon>Transactions</ListItemIcon>
          </MenuItem>
          <MenuItem
            to="/statistics"
            component={NavLink}
          >
            <ListItemIcon>Statistics</ListItemIcon>
          </MenuItem>
          <MenuItem
            to="/profile"
            component={NavLink}
          >
            <ListItemIcon>Profile</ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>Logout</ListItemIcon>
          </MenuItem>
        </MenuList>
      </nav>
      </div>
      <main>{children}</main>
      <div className="btn">
        <Add className={`${classes.addCircleIcon}`} />
      </div>
    </Fragment>
  )
}
export default Navigation
