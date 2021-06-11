const connect = require('./connection');
const ObjectId = require('mongodb').ObjectId;

const registerUser = async (username, password) =>
  connect().then((db) =>
    db.collection('users').insertOne({ username, password })
  ).then(result => result.ops[0].username );

const findUser = async (username) =>
  connect().then((db) => db.collection('users').findOne({ username }));

const findUserById = async (userId) =>
  connect().then((db) => db.collection('users').findOne({ _id: ObjectId(userId) }));


module.exports = { registerUser, findUser };
