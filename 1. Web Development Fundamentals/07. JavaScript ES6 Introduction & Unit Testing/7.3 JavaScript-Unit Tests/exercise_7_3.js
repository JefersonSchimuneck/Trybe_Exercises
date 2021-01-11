const assert = require("assert");

// Praticando a implementação de testes
// 1 A função sum(a, b) retorna a soma do parâmetro a com o b.  Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5").
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

assert.strictEqual(typeof sum, "function");

// Teste se o retorno de sum(4, 5) é 9.
assert.strictEqual(sum(4, 5), 9);

// Teste se o retorno de sum(0, 0) é 0.
assert.strictEqual(sum(0, 0), 0);

// Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5).
assert.throws(() => {
  sum(4, "5");
});

//Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5").
assert.throws(() => {
  sum(4, "5");
}, /^Error: parameters must be numbers$/);

// 2 A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//Verifique se o array passado por parâmetro não sofreu alterações
const array = [1, 2, 3, 4];
myRemove(array, 3);
assert.deepStrictEqual(array, [1, 2, 3, 4]);

//Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

//3 A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
const newArray = [1, 2, 3, 4];
myRemoveWithoutCopy(newArray, 3);
assert.deepStrictEqual(newArray, [1, 2, 4]);

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

//4 A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(15), "fizzbuzz");

// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(9), "fizz");

// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(10), "buzz");

// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(7), 7);

// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz("a"), false);

//5 Compare dois objetos (JSON) para verificar se são idênticos ou não
const obj1 = {
  title: "My Title",
  description: "My Description",
};

const obj2 = {
  description: "My Description",
  title: "My Title",
};

const obj3 = {
  title: "My Different Title",
  description: "My Description",
};

assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);

// Escrevendo código para testes
// 1 Escreva a função addOne para passar nos testes já implementados.
const addOne = (array) => {
  const changed = [];
  for (let index = 0; index < array.length; index += 1) {
    changed.push(array[index] + 1);
  }
  return changed;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expectedA = [32, 58, 13, 6];
const outputA = addOne(myArray);

assert.strictEqual(typeof addOne, "function");
assert.deepStrictEqual(outputA, expectedA);
assert.deepStrictEqual(myArray, unchanged);

// 2 Escreva a função wordLengths para passar nos testes já implementados.
const wordLengths = (array) => {
  const length = [];
  for (let index = 0; index < array.length; index += 1) {
    length.push(array[index].length);
  }
  return length;
};

const words = ["sun", "potato", "roundabout", "pizza"];
const expectedB = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, "function");
const outputB = wordLengths(words);
assert.deepStrictEqual(outputB, expectedB);

// 3 Escreva a função addAllnumbers para passar nos testes já implementados.
const addAllnumbers = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  return sum;
};

const numbers = [9, 23, 10, 3, 8];
const expectedC = 53;
const outputC = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, "function");
assert.strictEqual(outputC, expectedC);

// 4 Escreva a função findTheNeedle para passar nos testes já implementados.
const findTheNeedle = (array, string) => {
  let needle = -1;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === string) {
      needle = index;
    }
  }
  return needle;
};

let wordsD = ["house", "train", "slide", "needle", "book"];
let expectedD = 3;
let outputD = findTheNeedle(wordsD, "needle");
assert.strictEqual(outputD, expectedD);

wordsD = ["plant", "shelf", "arrow", "bird"];
expectedD = 0;
outputD = findTheNeedle(wordsD, "plant");
assert.strictEqual(outputD, expectedD);

wordsD = ["plant", "shelf", "arrow", "bird"];
expectedD = -1;
outputD = findTheNeedle(wordsD, "plat");
assert.strictEqual(outputD, expectedD);

//Reescrevendo funções utilizando TDD
//1 Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
// const greetPeople = (people) => {
//     let greeting = 'Hello ';

//     for (const person in people) {
//       greeting += people[person];
//     }
//     return greeting;
//   };

const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
    greeting.push("Hello " + people[person]);
  }
  return greeting;
};

const parameterA = ["Irina", "Ashleigh", "Elsa"];
const resultA = ["Hello Irina", "Hello Ashleigh", "Hello Elsa"];
assert.deepStrictEqual(greetPeople(parameterA), resultA);

// 2 Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
//   const removeVowels = (word) => {
//     const characters = word.split('');
//     const results = [];

//     for (let i = 0; i < characters.length; i += 1) {
//       if (
//         characters[i] === 'a' ||
//         characters[i] === 'o' ||
//         characters[i] === 'i' ||
//         characters[i] === 'e' ||
//         characters[i] === 'u'
//       ) {
//         results.push(characters[i]);
//       } else {
//         results.push('_');
//       }
//     }
//     return results;
//   };

const removeVowels = (word) => {
  const characters = word.split("");
  let results = "";
  let counter = 1;
  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === "a" ||
      characters[i] === "o" ||
      characters[i] === "i" ||
      characters[i] === "e" ||
      characters[i] === "u"
    ) {
      results += counter;
      counter += 1;
    } else {
      results += characters[i];
    }
  }
  return results;
};

const parameterB = "Dayane";
const resultB = "D1y2n3";
assert.strictEqual(removeVowels(parameterB), resultB);

// 3 Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
// const greaterThanTen = (array) => {
//     let results = 0;
//     for (let i = 0; i < array.length; i += 1) {
//       if (array[i] > 10) {
//         results += array[i];
//       }
//     }
//     return results;
//   };

const greaterThanTen = (array) => {
  let results = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results.push(array[i]);
    }
  }
  return results;
};

const parameterC = [4, 10, 32, 9, 21];
const resultC = [32, 21];
assert.deepStrictEqual(greaterThanTen(parameterC), resultC);

//4 Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
//   function secondThirdSmallest(array) {
//     let results = []
//     array.sort(function (x, y) {
//         return x + y;
//     });
//     results = [array[1], array[2]];
//     return results;
// };

function secondThirdSmallest(array) {
  let results = [];
  array.sort(function (x, y) {
    return x - y;
  });
  results = [array[1], array[2]];
  return results;
}

const parameterD = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const resultD = [5, 6];
assert.deepStrictEqual(secondThirdSmallest(parameterD), resultD);
