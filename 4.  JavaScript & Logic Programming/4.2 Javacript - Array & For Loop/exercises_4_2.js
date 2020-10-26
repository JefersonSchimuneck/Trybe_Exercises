let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
console.log("1. Os elementos do array 'numbers' são:")
console.log("")
for (let index = 0; index < numbers.length; index +=1 ) {
    console.log(numbers[index]);
}
console.log("")

//2
let sum = 0;
for (let index = 0; index < numbers.length; index +=1 ) {
    sum += numbers[index];
}
console.log(`2. A soma dos elementos do array resulta em ${sum}.`)
console.log("")

//3
let average = sum / numbers.length;
console.log(`3. A média aritmética dos elementos do array resulta em ${average}.`)
console.log("")

//4
if (average > 20) {
    console.log('4. Valor maior que 20.')
} else {
    console.log('4. Valor menor ou igual a 20.')
}
console.log("")

//5
let highestNumber = 0;
for (let index = 0; index < numbers.length; index +=1 ) {
    if (numbers[index] > highestNumber){
        highestNumber = numbers[index];
    }
}

console.log(`5. O maior número do array é ${highestNumber}.`)
console.log("")