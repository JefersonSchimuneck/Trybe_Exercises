//Parte 1
console.log('Parte 1');

//1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada. Modifique a estrutura da função para que ela seja uma arrow function. Modifique as concatenações para template literals.
console.log('1.');

const testingScope = (escopo) => { 
    if (escopo === true) { 
      var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  }
  testingScope(true);

//2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
//Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
console.log('2.');

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const orderArray = (array) => array.sort((a, b) => a - b);
console.log(`Os números ${orderArray(oddsAndEvens)} se encontram ordenados de forma crescente!`)

//Parte 2
console.log('Parte 2');

//1 Crie uma função que receba um número e retorne seu fatorial.
console.log('1.');

const calcFatorial = (n) => {
  let result = n;
  for (let index = n-1; index > 1; index -= 1) {
    result *= index;
  }
  return result;
};
console.log(calcFatorial(4));

//2 Crie uma função que receba uma frase e retorne qual a maior palavra.
console.log('2.');

const largestWord = (frase) => {
  let array = frase.split(' ');
  let largest = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > largest.length) {
      largest = array[index];
    }
  }
  return largest;
}
console.log(largestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

//4 Crie um código JavaScript com a seguinte especificação:

// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
console.log('4.1');

const replaceX = string => 'Tryber x aqui!'.replace('x', string);
console.log(replaceX('Jeferson'));

// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
const skills = ['Git', 'HTML', 'CSS', 'JavaScript', 'DOM'];

// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
console.log('4.2');

const printMessage = (string) => {
  return `${string}
  Minhas cinco principais habilidades são:
  ${skills.sort()}`
}
console.log(printMessage(replaceX('Jeferson')));

//3 Crie uma página que contenha: Um botão ao qual será associado um event listener; Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão; Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const button = document.getElementsByTagName('button');
let counter = 0;
button[0].addEventListener('click', () => {
  const displayCounter = document.getElementsByTagName('h2');
  counter += 1;
  displayCounter[0].innerText = counter;
});
