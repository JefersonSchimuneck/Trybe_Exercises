const rescue  = require('express-rescue');
const { resourceLimits } = require('worker_threads');

const users = await User.findAll();

res.status(200).json(users);