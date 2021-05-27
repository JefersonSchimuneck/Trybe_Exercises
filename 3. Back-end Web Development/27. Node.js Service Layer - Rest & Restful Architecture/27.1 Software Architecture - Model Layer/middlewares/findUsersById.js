const rescue = require('express-rescue');
const User = require('../models/user');

module.exports = rescue( async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return res.status(400).json({ error: true, message: 'Usuário não encontrado'});
  }

  return res.status(200).json(user);
})