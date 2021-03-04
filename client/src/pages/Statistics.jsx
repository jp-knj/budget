import React, { Fragment } from 'react'

// Components
import BarChart from '../components/Chart/BarChart'

// Material UI
import { Tabs, Tab } from '@material-ui/core'

const Statistics = () => {
  return (
    <Fragment>
    <div className='header'>
      <section className="budget">
        <Tabs variant='fullWidth' aria-label='tabs' className="border_btm">
          <Tab label="Week"/>
          <Tab label="Month"/>
          <Tab label="Year"/>
        </Tabs>
        <BarChart />
      </section>
      </div>
      <main>
        <section className='transaction'>
        <ul className='transaction_lists'>
        <li className='transaction_list'>
            <div>Mon</div>
            <div className='positive'>+ 1900</div>
            <div className='negative'>- 2000</div>
          </li>
          <li className='transaction_list'>
            <div>Tue</div>
            <div className='positive'>+ 1900</div>
            <div className='negative'>- 2000</div>
          </li>
          <li className='transaction_list'>
            <div>Wed</div>
            <div className='positive'>+ 1900</div>
            <div className='negative'>- 2000</div>
          </li>
          <li>
            <div>Thu</div>
            <div className='positive'>+ 1900</div>
            <div className='negative'>- 2000</div>
          </li>
          <li>
            <div>Fri</div>
            <div className='positive'>+ 1900</div>
            <div className='negative'>- 2000</div>
          </li>
        </ul>
        </section>
      </main>
    </Fragment>
  )
}

export default Statistics
