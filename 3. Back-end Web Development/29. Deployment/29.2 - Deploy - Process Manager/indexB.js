const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, worldB!');
});

app.get('/break', (req, res) => {
  res.send('Bye, world...');

  process.exit(1);
});

app.listen(port);
console.log(`Escutando na porta ${port}`);
