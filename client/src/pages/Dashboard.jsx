import React, { Fragment } from 'react'

const Dashboard = () => {
  return (
    <Fragment>
      <div className='header'>
        <section className="budget">
          <div className="budget_inner">
              <p className="budget_title">Total Balance</p>
              <span className="budget_value">5000円</span>
            <div className='budget_box'>
              <div className='budget_items'>
                <p className="budget_title">Income</p>
                <span className="budget_value-sub">5000円</span>
              </div>
              <div className='budget_items'>
                <p className="budget_title">Expense</p>
                <span className="budget_value-sub">5000円</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <main>
        <section className='transaction'>
          <div className='transaction_header'>
            <div className='transaction_sort'>recent▼</div>
            <div className='transaction_sort'>amount▼</div>
          </div>
          <ul className='transaction_lists'>
            <li className='transaction_list'>
              <div>
                <h3>Travel</h3>
                <p>In 8 hours</p>
              </div>
              <div className="positive">
                + 5000 円
              </div>
            </li>
            <li className='transaction_list'>
              <div>
                <h3>Food</h3>
                <p>In 8 hours</p>
              </div>
              <div className="negative">
                - 5000 円
              </div>
            </li>
            <li className='transaction_list'>
              <div>
                <h3>Travel</h3>
                <p>In 8 hours</p>
              </div>
              <div className="positive">
                + 5000 円
              </div>
            </li>
             <li className='transaction_list'>
              <div>
                <h3>Food</h3>
                <p>In 8 hours</p>
              </div>
              <div className="negative">
                - 5000 円
              </div>
            </li>
          </ul>
        </section>
      </main>
    </Fragment>
  )
}

export default Dashboard
