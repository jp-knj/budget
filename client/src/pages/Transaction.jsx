import React, { Fragment } from 'react'

// Components
import TransactionList from '../components/TransactionList'

// Material UI
import { Tabs, Tab } from '@material-ui/core'
import { ThemeProvider } from "@material-ui/styles"
import { Button, ButtonGroup } from '@material-ui/core'

const Transaction = () => {
  return (
    <Fragment>
      <div className='header'>
        <section className="budget">
          <Tabs variant='fullWidth' aria-label='tabs' className="border_btm">
            <Tab label="Day"/>
            <Tab label="Week"/>
            <Tab label="Month"/>
            <Tab label="Year"/>
          </Tabs>
          <div className="budget_inner">
            <p className="budget_title">Dayly Balance</p>
            <span className="budget_value">+ 5000円</span>
          </div>
          <ThemeProvider>
            <ButtonGroup fullWidth>
              <Button>All</Button>
              <Button>Income</Button>
              <Button>Expense</Button>
            </ButtonGroup>
          </ThemeProvider>
        </section>
      </div>
      <main>
        <TransactionList />
      </main>
    </Fragment>
  )
}

export default Transaction
