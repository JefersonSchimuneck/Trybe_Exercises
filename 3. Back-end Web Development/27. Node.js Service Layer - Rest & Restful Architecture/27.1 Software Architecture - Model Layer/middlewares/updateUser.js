const rescue = require('express-rescue');
const UserModel = require('../models/user');

module.exports = [
  (req, res, next) => {
    const { error } = UserModel.isValid(req.body);
    
    if (error) return next(error);

    next();
  },
  rescue(async (req, res) => {
    const { id } = req.params;

    const { firstName, lastName, email, password } = req.body;

    const updatedUser = await UserModel.updateUser(id, { firstName, lastName, email, password });

    if (!updatedUser) {
      return res.status(404).json({ error: true, message: 'Usuário não encontrado'});
    }

    return res.status(200).json(updatedUser);
  }),
]