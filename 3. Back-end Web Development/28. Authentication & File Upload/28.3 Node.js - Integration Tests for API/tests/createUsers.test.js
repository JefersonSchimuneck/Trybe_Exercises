const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../api/app');

const { MongoClient } = require('mongodb');
const { MongoMemoryServer }= require('mongodb-memory-server');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /api/users', () => {
  describe('quando é criado com sucesso', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async() => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);


      response = await chai.request(server)
      .post('/api/users')
      .send({
        username: 'jane',
        password: 'senha123'
      });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    })

    it('retorna o código de status 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.an('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o texto "Novo usuário criado com sucesso"', () => {
      expect(response.body.message).to.be.equal('Novo usuário criado com sucesso');
    });
  });
});

describe('Quando a pessoa usuária é encontrada com sucesso', () => {
  let response;
  const DBServer = new MongoMemoryServer();

  before(async () => {
      const connectionMock = await DBServer.getUri()
          .then(URLMock => MongoClient.connect(
              URLMock,
              { useNewUrlParser: true, useUnifiedTopology: true }
          ));

      sinon.stub(MongoClient, 'connect')
          .resolves(connectionMock);

      connectionMock.db('jwt_exercise')
          .collection('users')
          .insertOne({
              _id: EXAMPLE_ID,
              username: 'fake-user',
              password: 'fake-password'
          })

      const token = await chai.request(server)
          .post('/api/login')
          .send({
              username: 'fake-user',
              password: 'fake-password'
          })
          .then((res) => res.body.token);

      response = await chai.request(server)
          .get(`/api/users/${EXAMPLE_ID}`)
          .set('authorization', token);
  });

  after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
  });

  it('retorna código de status "200"', () => {
      expect(response).to.have.status(200);
  });

  it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
  });
});