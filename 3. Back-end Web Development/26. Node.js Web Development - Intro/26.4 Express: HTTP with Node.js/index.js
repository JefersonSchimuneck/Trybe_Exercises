const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const util = require('./util');


const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message:`Hello ${name}!`});
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age) <= 17) {
    return res.status(401).json({ message: 'Unauthorized'})
  }

  res.status(200).json({ message: `Hello, ${name}!`});
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons/:id',
rescue(async (req, res) => {
  const simpsons = await util.getSimpsons();
  const simpson = simpsons.find(({ id }) => id === req.params.id);

  if (!simpson) {
    return res.status(404).json({ message: 'simpson not found' });
  }

  return res.status(202).json(simpson);
})
);

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await util.getSimpsons();

    if (simpsons.find(character => character.id === id )) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await util.setSimpsons(simpsons);

    res.status(204).end();
  })
)


app.use(function(err, req, res, next) {
  res.status(500).send(`Erro: ${err.message}`);
});

app.listen(3000, () => console.log('port: 3000'));