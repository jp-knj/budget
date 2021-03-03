const express = require('express');
const router = express.Router();

// Controllers
const {
  getTransactions,
  addTransaction,
  deleteTransactions
} = require('../controllers/transactions');

// Route
router
  .route('/')
  .get(getTransactions)
  .post(addTransaction);

router
  .route('/:id')
  .delete(deleteTransactions);

module.exports = router;
