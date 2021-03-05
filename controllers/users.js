const { User } = require('../models/User');
const bcrypt = require('bcryptjs');

// @description register new user
// @route       POST /api/user
// @access      Public
exports.registerUser = async (req, res) => {
  try {
    console.log(req.body)

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
