let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log("1. The elements of the array are:")
for (let index = 0; index < numbers.length; index +=1 ) {
    console.log(numbers[index]);
}
console.log("")

//2 Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let sum = 0;
for (let index = 0; index < numbers.length; index +=1 ) {
    sum += numbers[index];
}
console.log(`2. The sum of the array elements is ${sum}.`)
console.log("")

//3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let mean = sum / numbers.length;
console.log(`3. The arithmetic mean of the array elemests is ${mean}.`)
console.log("")

//4 Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (mean > 20) {
    console.log('4. The Arithmetic mean is a value greater than 20.')
} else {
    console.log('4. The Arithmetic mean is a value less than 20.')
}
console.log("")

//5 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let highestNumber = 0;
for (let index = 0; index < numbers.length; index +=1 ) {
    if (numbers[index] > highestNumber){
        highestNumber = numbers[index];
    }
}
console.log(`5. The highest number of the array is ${highestNumber}.`)
console.log("")

//6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let oddNumbers = 0;
for (let index = 0; index < numbers.length; index +=1 ) {
    if (numbers[index] % 2 != 0){
        oddNumbers +=1;
    }
}
if (oddNumbers > 0) {
    console.log(`6. There are ${oddNumbers} odd numbers in the array`)
} else {
    console.log(`6. There's no odd number in the array`)
}
console.log("")

//7 Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let lowestNumber = Infinity;
for (let index = 0; index < numbers.length; index +=1 ) {
    if (numbers[index] < lowestNumber){
        lowestNumber = numbers[index];
    }
}
console.log(`7. The lowest number in the array is ${lowestNumber}.`)
console.log("")

//8 Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;
let newArray = [];
for (let index = 1; index <= 25; index +=1 ) {
    newArray.push(index)
}
console.log(`8. New Array: [${newArray}]`)
console.log("")

//9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
console.log("9. The elements of the previous array, when divided by 2, are as follows:")
for (index = 0; index < newArray.length; index +=1){
    console.log(`${newArray[index] / 2}`)
}

//Bônus
//1 Ordene o array numbers em ordem crescente e imprima seus valores;
for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        let position = numbers[i];
  
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
  }
  console.log(`Bônus 1: The ascending order of the array is: ${numbers}`);
  console.log("")

  //2 Ordene o array numbers em ordem decrescente e imprima seus valores;
  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        let position = numbers[i];
  
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
  }
  console.log(`Bônus 2: The descending order of the array is: ${numbers}`);
  console.log("")

  //3 Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

  numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let multArray = [];
  for(let i = 0; i < numbers.length-1; i +=1) {
      multArray.push(numbers[i] * numbers[i + 1]);
  }
  multArray.push(numbers[numbers.length -1] * 2);
  console.log(`Bônus 3: ${multArray}`);