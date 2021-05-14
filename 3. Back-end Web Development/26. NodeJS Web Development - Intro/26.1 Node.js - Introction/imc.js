const readline = require('readline-sync');

  const weight = readline.questionFloat('Whats your weight? ');
  const height = readline.questionFloat('Whats your height? ');

function calculateIMC(weight, height) {
  return weight / Math.pow(height, 2).toFixed(1);
};

function classifyIMC(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso (magreza)';
  } else  if (imc >= 18.5 && imc < 25) {
    return 'Peso Normal';
  } else  if (imc >= 25 && imc < 30) {
    return 'Acima do peso (sobrepeso)';
  } else  if (imc >= 30 && imc < 35) {
    return 'Obesidade grau I';
  } else  if (imc >= 35 && imc < 40) {
    return 'Obesidade grau II';
  };
  return 'Obesidade graus III e IV';
};

const IMC = calculateIMC(weight, height);
const statusIMC = classifyIMC(IMC);

console.log(`Seu IMC é: ${IMC}. ${statusIMC}`);
