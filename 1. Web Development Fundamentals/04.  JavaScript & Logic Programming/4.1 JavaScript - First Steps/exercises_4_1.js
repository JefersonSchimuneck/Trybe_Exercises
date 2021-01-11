//1 Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Faça programas para: Adição, Subtração, Multiplicação, Divisão, Módulo.
let a = 10;
let b = 10;
let c;

c = a + b;
console.log("1:a) " + a + " + " + b + " = " + c);

c = a - b;
console.log("1:b) " + a + " - " + b + " = " + c);

c = a * b;
console.log("1:c) " + a + " * " + b + " = " + c);

c = a / b;
console.log("1:d) " + a + " / " + b + " = " + c);

c = a % b;
console.log("1:e) " + a + " % " + b + " = " + c);

//2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
let elemA = 1;
let elemB = 2;

if (elemA > elemB) {
    console.log("2: " + elemA + " é o maior elemento entre " + elemA + " e " + elemB)
} else {
    console.log("2: " + elemB + " é o maior elemento entre " + elemA + " e " + elemB);
}

//3 Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let elemC = 3;
let elemD = 4;
let elemE = 5;

if (elemC > elemD && elemC > elemE) {
    console.log("3: " + elemC + " é o maior elemento entre " + elemC + ", " + elemD + " e " + elemE )
} else if (elemD > elemC && elemD > elemE) {
    console.log("3: " + elemD + " é o maior elemento entre " + elemC + ", " + elemD + " e " + elemE )
} else {
    console.log("3: " + elemE + " é o maior elemento entre " + elemC + ", " + elemD + " e " + elemE )
}

//4 Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let verPosOuNeg = 50;
if (verPosOuNeg > 0) {
    console.log("4: " + verPosOuNeg + " is positive")
} else if (verPosOuNeg < 0) {
    console.log("4: " + verPosOuNeg + " is negative")
} else {
    console.log("4: " + verPosOuNeg + " is zero")
}

//5 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
let angleA = 60;
let angleB = 60;
let angleC = 60;

if (angleA + angleB + angleC == 180) {
    console.log("5: Os 3 ângulos formam um triângulo válido")
} else {
    console.log("5: Os 3 ângulos NÃO formam um triângulo válido")
}

//6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
let piece = "hOrSe";

if (piece.toLowerCase() == "horse") {
    console.log("6: " + piece + " moves in L shape")
} else if (piece.toLowerCase() == "bishop") {
    console.log("6: " + piece + " moves in diagonals")
} else if (piece.toLowerCase() == "rook") {
    console.log("6: " + piece + " moves in straight lines")
} else if (piece.toLowerCase() == "queen") {
    console.log("6: " + piece + " moves in diagonals and straight lines")
} else if (piece.toLowerCase() == "king") {
    console.log("6: " + piece + " moves 1 square to any direction")
} else if (piece.toLowerCase() == "pawn") {
    console.log("6: " + piece + " moves 1* square forward")
} else {
    console.log("6: " + piece + " is not a chess piece")
}

//7 Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: Porcentagem >= 90 -> A / Porcentagem >= 80 -> B / Porcentagem >= 70 -> C / Porcentagem >= 60 -> D / Porcentagem >= 50 -> E / Porcentagem < 50 -> F / O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
let grade = 82;


if (grade > 100) {
    console.log("7: " + grade + ": is not a valid Grade")
}
else if (grade >= 90) {
    console.log("7: " + grade + ": is Grade: A")
} else if (grade >= 80) {
    console.log("7: " + grade + ": is Grade: B")
} else if (grade >= 70) {
    console.log("7: " + grade + ": is Grade: C")
} else if (grade >= 60) {
    console.log("7: " + grade + ": is Grade: D")
} else if (grade >= 50) {
    console.log("7: " + grade + ": is Grade: E")
} else if (grade < 50 && grade >= 0) {
    console.log("7: " + grade + ": is Grade: F")
} else {
    console.log("7: " + grade + ": is not a valid Grade")
}

//8 Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false. Bonus: use somente um if.
let numA = 10;
let numB = 20;
let numC = 30;

if (numA % 2 == 0 || numB % 2 == 0 || numC % 2 == 0) {
    console.log("8: Existe pelo menos um número par na sequência " + numA + ", " + numB + " e " + numC)
} else {
    console.log("8: Não existe nenhum número par na sequência " + numA + ", " + numB + " e " + numC)
}

//9 Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false. Bonus: use somente um if.
let numD = 10;
let numE = 20;
let numF = 30;

if (numD % 2 != 0 || numE % 2 != 0 || numF % 2 != 0) {
    console.log("9: Existe pelo menos um número ímpar na sequência " + numD + ", " + numE + " e " + numF)
} else {
    console.log("9: Não existe nenhum número ímpar na sequência " + numD + ", " + numE + " e " + numF)
}

//10 Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. Atente que, sobre o custo do produto, incide um imposto de 20%. Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero. O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo. valorCustoTotal = valorCusto + impostoSobreOCusto / lucro = valorVenda - valorCustoTotal (lucro de um produto)
let custoUn = 50;
let venda = 100;
let imposto;
let custoTotal;
let lucro;

if (custoUn <= 0 || venda <= 0 || custoUn >= venda) {
    console.log("10: Valor(es) inválido(s)")
} else {
    custoTotal = (custoUn * 1000) + ((custoUn * 1000) * 20 / 100);
    lucro = (100 * 1000) - custoTotal;
    console.log("10: Ao vender por $" + venda + ", 1000 unidades de um produto que tem um custo unitário de $" + custoUn + " a empresa teria um resultado de $" + lucro)
}

//11 Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salario = 3000;
let inss;
let irrf;
let salLiq;

if (salario <= 0) {
    console.log("11: Valor do salário deve ser maior que 0")
} else if (salario < 1556.95) {
    inss = salario * (8/100);
} else if (salario < 2594.93) {
    inss = salario * (9/100);
} else if (salario < 5189.83) {
    inss = salario * (11/100); 
} else {
    inss = 570.88;
}

if (salario <= 0) {
    console.log("11: Valor do salário deve ser maior que 0");
} else if ((salario - inss) < 1903.99) {
    irrf = 0;
} else if ((salario - inss) < 2826.66) {
    irrf = ((salario - inss) * (7.5/100)) - 142.80;
} else if ((salario - inss) < 3751.06) {
    irrf = ((salario - inss) * (15/100)) - 354.80;
} else if ((salario - inss) < 4664.69) {
    irrf = ((salario - inss) * (22.5/100)) - 636.13;
} else {
    irrf = ((salario - inss) * (27.5/100)) - 869.36;
}
salLiq = salario - inss - irrf;
console.log("11: Uma pessoa que receba R$" + salario + " de salário, tem descontado de sua folha R$" + inss + " de INSS e R$" + irrf + " de IRRF, recebendo o valor líquido de R$" + salLiq)