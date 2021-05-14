const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

const options = scripts.map((script, index) => console.log(`${index + 1}. ${script.name}`));

const chosenScript = readline.question('Qual script deseja rodar?');

const runScript = scripts[chosenScript - 1];

require(runScript.script);
