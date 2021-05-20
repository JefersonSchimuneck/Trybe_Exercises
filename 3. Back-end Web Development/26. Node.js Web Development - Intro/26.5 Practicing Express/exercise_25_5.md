##### Atividade 4:

Rota: `/user/:name`

Objetivo: Deve validar se o usuário existe e, caso exista, deve retornar os comentários feitos por ele. Caso não exista, deve retornar um status de erro com uma mensagem `user not found.` .



```javascript
const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"]
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"]
  }
]
```



```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(Executando na porta ${ PORTA });
});
app.get('/', (req, res) => {
  console.log('Foi');
  res.status(200).json({ "seraQFoi?": "Foi" });
});
const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"]
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"]
  }
]
app.get('/user/:name', (req, res) => {
  const { name } = req.params;
  const find = users.find((element) => element.user === name );
  if (find) {
    return res.status(200).json(find.comments);
  }
  return res.status(404).json('user not found')
});
```