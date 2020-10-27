//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let n = 10;
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
let c = 1;
for (let indexLine = 0; indexLine < n; indexLine +=1) {
    asteriskLine = "";
    for (let indexSpace = n-c; indexSpace >= 0; indexSpace -=1) {
            asteriskLine += " ";
    }
    for (let indexAsterix = n+c; indexAsterix > n; indexAsterix -=1) {
        asteriskLine += "*";    
    }
    console.log(asteriskLine);
    c += 1;
}
console.log();