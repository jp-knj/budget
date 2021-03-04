import React from 'react'

// Material-UI Icon
import { Add } from '@material-ui/icons'

// Material-UI Core
import { MenuItem, MenuList, ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Component
import TransactionForm from '../components/TransactionForm'

const Navigation = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    addCircleIcon: {
      color: 'white'
    }
  }))
  const classes = useStyles();
  return (
    <div>
      <nav className="navigation">
        <MenuList>
          <MenuItem>
            <ListItemIcon>DashBoard</ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>Transactions</ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>Statistics</ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>Profile</ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>Logout</ListItemIcon>
          </MenuItem>
        </MenuList>
      </nav>
      <main>{children}</main>
      <div className="btn">
        <Add className={`${classes.addCircleIcon}`} />
      </div>
      <TransactionForm />
    </div>
  )
}
export default Navigation
