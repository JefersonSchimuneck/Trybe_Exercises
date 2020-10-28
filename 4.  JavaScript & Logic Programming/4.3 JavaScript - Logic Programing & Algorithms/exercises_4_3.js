//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let n = 7;
let asteriskLine = "";
console.log("1.");
for (let indexLine = 0; indexLine < n; indexLine += 1) {
  asteriskLine += "*";
}
for (let indexColumn = 0; indexColumn < n; indexColumn += 1) {
  console.log(asteriskLine);
}
console.log();

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
asteriskLine = "";
console.log("2.");
for (let indexLine = 0; indexLine < n; indexLine += 1) {
  asteriskLine += "*";
  console.log(asteriskLine);
}
console.log();

//3- Agora inverta o lado do triângulo
console.log("3.");
let counter = 1;
for (let indexLine = 0; indexLine < n; indexLine += 1) {
  //Reseta a string a cada início de loop
  asteriskLine = "";
  //Começa preenchendo os primeiros caracteres com espaço e vai reduzinfo a cada loop conforme o contador
  for (let indexSpace = n - counter; indexSpace > 0; indexSpace -= 1) {
    asteriskLine += " ";
  }
  //Começa preenchendo os últimos caracteres com asterisco e vai aumentando a cada loop conforme o contador
  for (let indexAsterisk = n + counter; indexAsterisk > n; indexAsterisk -= 1) {
    asteriskLine += "*";
  }
  //Imprime linha
  console.log(asteriskLine);
  //Incrementa contador
  counter += 1;
}
console.log();

//4- Depois, faça uma pirâmide com n asteriscos de base:
console.log("4.");
let lineCounter = 0;
let counterSpace = 0;
let counterAsterisk = 0;
//Condicional, que faz o código executar somente para números ímpares
if (n % 2 != 0) {
  //Calcula o número de linhas que a pirâmide terá e serve de controle para posicionamento dos elementos
  for (let index = n; index > 0; index -= 2) {
    lineCounter += 1;
  }
  //Loop que percorre o número de linhas
  for (let indexLine = lineCounter; indexLine > 0; indexLine -= 1) {
    //Reseta a string a cada início de loop
    asteriskLine = "";
    //Preenche os primeiros caracteres com espaço antes do meio e vai reduzindo conforme o contador de espaços
    for (
      let indexSpace = n - lineCounter - counterSpace;
      indexSpace > 0;
      indexSpace -= 1
    ) {
      asteriskLine += " ";
    }
    //Preenche o meio com asteriscos e vai incrementando conforme o contador de asteriscos
    for (
      let indexAsterisk = lineCounter + 1 + counterAsterisk;
      indexAsterisk > lineCounter;
      indexAsterisk -= 1
    ) {
      asteriskLine += "*";
    }
    //Imprime a string
    console.log(asteriskLine);
    //Incrementa contadores
    counterSpace += 1;
    counterAsterisk += 2;
  }
} else {
  console.log("Favor digitar um número ímpar");
}
console.log();

//Bônus
//5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
console.log("5.");
lineCounter = 0;
counterSpace = 0;
let counterSpace2 = 0;
//Condicional, que faz o código executar somente para números ímpares
if (n % 2 != 0) {
  //Calcula o número de linhas que a pirâmide terá e serve de controle para posicionamento dos elementos
  for (let index = n; index > 0; index -= 2) {
    lineCounter += 1;
  }
  //Imprime a primeira linha
  asteriskLine = "";
  for (let indexSpace = n - lineCounter; indexSpace > 0; indexSpace -= 1) {
    asteriskLine += " ";
  }
  asteriskLine += "*";
  console.log(asteriskLine);
  //Loop para preencher as linhas do meio (a primeira e a última não)
  for (let indexLine = lineCounter - 2; indexLine > 0; indexLine -= 1) {
    //Reseta a string a cada início de loop
    asteriskLine = "";
    //Preenche os primeiros caracteres com espaço antes do meio e vai reduzindo conforme o contador de espaços
    for (
      let indexSpace = n - 2 - lineCounter - counterSpace;
      indexSpace >= 0;
      indexSpace -= 1
    ) {
      asteriskLine += " ";
    }
    //Preenche primeiro asterisco
    asteriskLine += "*";
    //Preenche o espaço entre os asteriscos e vai incrementando conforme o contador de espaços 2
    for (
      let indexSpace = lineCounter + 1 + counterSpace2;
      indexSpace > lineCounter;
      indexSpace -= 1
    ) {
      asteriskLine += " ";
    }
    asteriskLine += "*";
    //Imprime a string
    console.log(asteriskLine);
    //Incrementa contadores
    counterSpace += 1;
    counterSpace2 += 2;
  }
  //Imprime última linha de asteriscos
  asteriskLine = "";
  for (let indexLine = 0; indexLine < n; indexLine += 1) {
    asteriskLine += "*";
  }
  console.log(asteriskLine);
} else {
  console.log("Favor digitar um número ímpar");
}
console.log();

//6 6- Faça um programa que diz se um número definido numa variável é primo ou não.
console.log("6.");
let number = 11;
let divCounter = 0;

for (index = 2; index < number; index += 1) {
    if (number % index == 0) {
        divCounter += 1;
    }
}
if (divCounter == 0) {
    console.log(`O número ${number} é primo`);
} else {
    console.log(`O número ${number} não é primo`);
}