let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
console.log("1. The elements of the array are:")
for (let index = 0; index < numbers.length; index +=1 ) {
    console.log(numbers[index]);
}
console.log("")

//2
let sum = 0;
for (let index = 0; index < numbers.length; index +=1 ) {
    sum += numbers[index];
}
console.log(`2. The sum of the array elements is ${sum}.`)
console.log("")

//3
let mean = sum / numbers.length;
console.log(`3. The arithmetic mean of the array elemests is ${mean}.`)
console.log("")

//4
if (mean > 20) {
    console.log('4. The Arithmetic mean is a value greater than 20.')
} else {
    console.log('4. The Arithmetic mean is a value less than 20.')
}
console.log("")

//5
let highestNumber = 0;
for (let index = 0; index < numbers.length; index +=1 ) {
    if (numbers[index] > highestNumber){
        highestNumber = numbers[index];
    }
}
console.log(`5. The highest number of the array is ${highestNumber}.`)
console.log("")

//6
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

//7
let lowestNumber = Infinity;
for (let index = 0; index < numbers.length; index +=1 ) {
    if (numbers[index] < lowestNumber){
        lowestNumber = numbers[index];
    }
}
console.log(`7. The lowest number in the array is ${lowestNumber}.`)
console.log("")

//8
let newArray = [];
for (let index = 1; index <= 25; index +=1 ) {
    newArray.push(index)
}
console.log(`8. New Array: [${newArray}]`)
console.log("")

//9
console.log("9. The elements of the previous array, when divided by 2, are as follows:")
for (index = 0; index < newArray.length; index +=1){
    console.log(`${newArray[index] / 2}`)
}