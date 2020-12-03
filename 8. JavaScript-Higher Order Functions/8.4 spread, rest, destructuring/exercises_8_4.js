const assert = require('assert')

//1 Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .
const rectangleArea = (width, height) => width * height

const rectangle1 = [1, 2]
const rectangle2 = [3, 5]
const rectangle3 = [6, 9]
const rectangles = [rectangle1, rectangle2, rectangle3]

for(rectangle of rectangles) {
    assert.strictEqual(rectangleArea(...rectangle), rectangle[0]*rectangle[1]) // altere a chamada da funcao rectangleArea
}

//2 Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 0);

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)

//3 Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
const alex = {
    name: "Alex",
    age: 26,
    likes: ["fly fishing"],
    nationality: "Australian"
}

const gunnar = {
    name: "Gunnar",
    age: 30,
    likes: ["hiking", "scuba diving", "taking pictures"],
    nationality: "Icelandic"
}

// complete a assinatura da função abaixo
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(", ")}.`
assert.strictEqual(personLikes(alex), "Alex is 26 years old and likes fly fishing.")
assert.strictEqual(personLikes(gunnar), "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.")


//4 Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo
const bornIn20Century = (birthYear) => birthYear >= 1901 && birthYear <= 2000;
const bornInAustralia = (nationality) => nationality === "Australian";


const filterPeople = (people) => people.filter(({bornIn, nationality}) => bornIn20Century(bornIn) && bornInAustralia(nationality));

const filteredPeople = filterPeople(people)

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })