const readline = require('readline-sync');

function checkNumber(correct, typed) {
  if (correct === typed) {
    return console.log('Parabéns, número correto!');
  }

  return console.log(`Opa, não foi dessa vez. O número era ${correct}`);
}

function guessNumber() {
  const correctNumber = Math.floor(Math.random() * 10);
  const typedAnswer = readline.questionInt('Digite um número entre 0 e 10 ');

  checkNumber(correctNumber, typedAnswer);

  const replay = readline.question("Deseja jogar novamente? ");

  if (replay === 'Sim') {
    guessNumber();
  }

  return;
};

console.log(guessNumber());