//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let n = 9;
let asteriskLine = "";
console.log("1.");
for (let indexLine = 0; indexLine < n; indexLine +=1) {
        asteriskLine += "*";
}
for (let indexColumn = 0; indexColumn < n; indexColumn +=1) {
    console.log(asteriskLine);
}
console.log();

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
asteriskLine = "";
console.log("2.");
for (let indexLine = 0; indexLine < n; indexLine +=1) {
    asteriskLine += "*";
    console.log(asteriskLine);
}
console.log();

//3- Agora inverta o lado do triângulo
console.log("3.");
let counter = 1;
for (let indexLine = 0; indexLine < n; indexLine +=1) {
    //Reseta a string a cada início de loop
    asteriskLine = "";
    //Começa preenchendo os primeiros caracteres com espaço e vai reduzinfo a cada loop conforme o contador
    for (let indexSpace = n-counter; indexSpace >= 0; indexSpace -=1) {
            asteriskLine += " ";
    }
    //Começa preenchendo os últimos caracteres com asterisco e vai aumentando a cada loop conforme o contador
    for (let indexAsterisk = n+counter; indexAsterisk > n; indexAsterisk -=1) {
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
    for (let index = n; index > 0; index -=2) {
        lineCounter += 1;
    }
    //Loop que percorre o número de linhas
    for (let indexLine = lineCounter; indexLine > 0; indexLine -=1){
        //Reseta a string a cada início de loop
        asteriskLine = "";
        //Preenche os primeiros caracteres com espaço antes do meio e vai reduzindo conforme o contador de espaços
        for (let indexSpace = (n-lineCounter) - counterSpace; indexSpace >= 0; indexSpace -=1) {
            asteriskLine += " ";
        }
        //Preenche o meio com asteriscos e vai incrementando conforme o contador de asteriscos
        for (let indexAsterisk = (lineCounter+1) + counterAsterisk; indexAsterisk > lineCounter; indexAsterisk -=1) {
            asteriskLine += "*";    
        }//Mesma ideia do preenchimento dos primeiros espaços
        for (let indexSpace = (n-lineCounter) - counterSpace; indexSpace >= 0; indexSpace -=1) {
            asteriskLine += " ";
        }
        //Imprime a string
        console.log(asteriskLine);
        //Incrementa contadores
        counterSpace += 1;
        counterAsterisk +=2;
    }
} else {
    console.log("Favor digitar um número ímpar");
}
console.log();