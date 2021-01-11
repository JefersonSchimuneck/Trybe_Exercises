//2 Agora, um passo para trás: vamos fazer, passo a passo, uma Promise . Primeiramente, instancie uma Promise . Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
//3 Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
//4 Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
//5 Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const randomArraySum = () => {
  const numbersArray = [];
  for (let index = 0; index < 10; index += 1) {
      numbersArray.push(Math.floor(Math.random() * 50));
  }
  return numbersArray.map(number => number * number)
  .reduce((acc, number) => acc + number);
}

const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
      const number = randomArraySum();
      number < 8000 ? resolve() : reject ();
  });

  promise
  .then(number => [2, 3, 5, 10].map(divisor => number / divisor))
  .then(array => array.reduce((acc, number) => acc + number))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

fetchPromise();