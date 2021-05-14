const readline = require('readline-sync');

const distance = readline.questionInt('Whats the distance in meters? ')
const time = readline.questionInt('Whats the time in seconds? ');

console.log(`A velocidade média é: ${distance / time}m/s`);