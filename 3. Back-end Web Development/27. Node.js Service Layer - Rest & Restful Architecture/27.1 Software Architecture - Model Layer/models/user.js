const Joi = require('joi');
const connection = require('./connection');
const { ObjectId } = require('mongodb');

function formatUser(document) {
  const { _id, password } = document;
  const formattedResult = { id: _id, ...user };

  return formattedResult;
}

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})
// .messages({
//   'any.required': 'O campo {{: id="label" }} é obrigatório',
//   'string.min': 'O campo {{: id="label" }} deve ter pelo menos, {{: id= "limit" }} caracteres,',
//   'string.email': 'Informe um email válido no campo {{: id="label" }}',
// });



function isValid(userData) {
return userSchema.validate(userData);
}

function create({ firstName, lastName, email, password }) {
  return connection().then((db) => db
    .collection('users')
    .insertOne({ firstName, lastName, email, password }))
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }))
}

function findAll() {
  return connection()
  .then((db) => db.collection('users').find().toArray())
  .then((results) => results.map(formatUser))
}

async function findById(id) {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const user = await connection()
  .then((db) => db.collections('users').findOne(new ObjectId(id)));

  if (!user) return null;

  return formatUser(user);
}

async function updateUser(id, { firstName, lastName, email, password }) {
  if(!ObjectId.isValid(id)) return null;

  const updateUser = await connection()
    .then((db) => {
      const userId = new ObjectId(id);
      const newData = { firstName, lastName, email, password };

      return db.collection('user')
        .findOneAndUpdate({ _id: userId }, { $set: newData }, { returnOriginal: false})
        .then((result) => result.value);
    });

    if(!updateUser) return null;

    return formatUser(updateUser);
}

module.exports = {
  isValid,
  create,
  findAll,
  findById,
  updateUser,
};
