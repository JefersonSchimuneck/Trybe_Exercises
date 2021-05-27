const rescue = require('express-rescue');
const userModel = require('../models/user');

module.exports = [
  (req, res, next) => {
    const { error } = userModel.isValid.validate(req.body);
    
    if (error) return next(error);
    next();
  },
  rescue(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    const newUser = await userModel.create({ firstName, lastName, email, password});

    res.status(201).json(newUser);
  })
]