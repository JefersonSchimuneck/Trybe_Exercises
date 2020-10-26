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
console.log(`2. A soma dos elementos do array resulta em ${sum}`)
console.log("")
