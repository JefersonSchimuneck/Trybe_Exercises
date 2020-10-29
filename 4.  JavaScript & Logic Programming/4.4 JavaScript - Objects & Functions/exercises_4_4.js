//Parte I - Objetos e For/In
//Usando o objeto abaixo, faça os exercícios a seguir:
console.log("Parte I - Objetos e For/In");
console.log();
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

//1 Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
console.log("1.");
console.log("Bem Vinda, " + info.personagem);
console.log();

//2 Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
info.recorrente = "Sim";
console.log("2.");
console.log(info);
console.log();

//3 Faça um for/in que mostre todas as chaves do objeto.
console.log("3.");
for (let key in info) {
    console.log(key);
}
console.log();

//4 Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
console.log("4.");
for (let key in info) {
    console.log(info[key]);
}
console.log();

//5 Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  };

  console.log("5.");
  for (let key in info) {
      if (info[key] == info2[key]){
          console.log("Ambos recorrentes");
      } else {
      console.log(info[key] + " e " + info2[key]);
    }
  }
  console.log();
//Parte II - Funções
console.log("Parte II - Funções");
console.log();

//1 Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
console.log("1.");
function palindromeVerifier(word) {
    let verifier = false;
    let reversedWord = "";
    for (let index = word.length -1; index >=0; index -= 1) {
        reversedWord += word[index];
    }
    if (reversedWord == word) {
        verifier = true;
        console.log(`A palavra ${word} é um palíndromo.`);
    } else {
        verifier = false;
        console.log(`A palavra ${word} não é um palíndromo.`);
    }
}
let writeTest = "arara";
palindromeVerifier(writeTest);
console.log();

//2 Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
console.log("2.");
function highestNumber(array) {
    let highestIndex = 0;
    let highestVerifier = 0;
    for (index = 0; index < array.length; index += 1) {
        if (array[index] > highestVerifier) {
            highestVerifier = array[index];
            highestIndex = index;
         }
    }
    console.log(`O índice do maior número no array [${array}] é ${highestIndex}.`);
}
let arrayTest =  [2, 3, 6, 7, 10, 1];
highestNumber(arrayTest);
console.log();

//3 Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
console.log("3.");
function lowestNumber(array) {
    let lowestIndex = 0;
    let lowestVerifier = Infinity;
    for (index = 0; index < array.length; index += 1) {
        if (array[index] < lowestVerifier) {
            lowestVerifier = array[index];
            lowestIndex = index;
         }
    }
    console.log(`O índice do menor número no array [${array}] é ${lowestIndex}.`);
}
arrayTest = [2, 4, 6, 7, 10, 0, -3];
lowestNumber(arrayTest);
console.log();

//4 Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
console.log("4.");
function mostCharacter(array) {
    let mostVerifier = "";
    for (index = 0; index < array.length; index += 1) {
        if (array[index].length > mostVerifier.length) {
            mostVerifier = array[index];
         }
    }
    console.log(`O nome com maior número de caracteres entre [${array}] é ${mostVerifier}.`);
}
arrayTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
mostCharacter(arrayTest);
console.log();

//5 Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
console.log("5.");
function mostRepeated(array) {
    let repeatedNumber = 0;
    let repeatSaved = 0;
    for (index = 0; index < array.length; index += 1) {
        let repeatCounter = 0;
        for (index2 = 0; index2 < array.length; index2 += 1) {
            if (index != index2) {
                if (array[index] == array[index2]) {
                repeatCounter += 1;
                }
            }
            if (repeatCounter > repeatSaved) {
                repeatedNumber = array[index];
            }
        }
        repeatSaved = repeatCounter;
    }
    console.log(`O número mais repetido no array [${array}] é ${repeatedNumber}.`);
}
arrayTest = [2, 3, 2, 5, 8, 2, 3];
mostRepeated(arrayTest);
console.log();

//6 Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
console.log("6.");
function elementCounter(number) {
    let sumNumber = 0;
    for (index = 0; index < number; index += 1) {
        sumNumber += index + 1;
    }
    console.log(`O somatório dos números de 1 até ${number} é ${sumNumber}.`);
}
let n = 5;
elementCounter(n);
console.log();

//7 Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
console.log("7.");
function endingVerifier(word, ending) {
    let verifier = false;
    let endingLetters = "";
    for (index = word.length - ending.length; index < word.length; index +=1) {
        endingLetters += word[index];
    }
    if (endingLetters == ending) {
        verifier = true;
        console.log(`A palavra "${ending}" corresponde ao final da palavra "${word}".`);
    } else {
        verifier = false;
        console.log(`A palavra "${ending}" não corresponde ao final da palavra "${word}".`);
    }
}
let firstWord = "trybe";
let secondWord = "be";
endingVerifier(firstWord, secondWord);
console.log();