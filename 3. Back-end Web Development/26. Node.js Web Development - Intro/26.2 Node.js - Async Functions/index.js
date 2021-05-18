//Exercício 1
function calculate(a, b, c) {
  return new Promise((resolve, reject) => {
    
    if ([a, b, c].some(param => typeof param !== 'number')) {
      return reject((new Error('Informe apenas números')))
    }

    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  });
}

//Exercício 2
function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

const threeRandomNumbers = Array.from({ length: 3 }, () => generateRandomNumber());

function callCalculateA() {
    calculate(...threeRandomNumbers)
    .then(result => console.log(result))
    .catch(err => console.log(err.message))
}

callCalculateA();

//Exercício 3
async function callCalculateB() {
   try {
    const result = await calculate(threeRandomNumbers);
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
}

callCalculateB();

//Exercício 4
const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then(data => JSON.parse(data))
  .then(characters => characters
    .map(({ id, name }) => `${id} - ${[name]}`))
  .then(elements => elements.forEach(element => console.log(element)));

async function getCharacterById(id) {
  const characters = await fs.readFile('./simpsons.json', 'utf-8')
    .then(data => JSON.parse(data));

  const chosenCharacter = characters.find(character => character.id === id);

  if (!chosenCharacter) {
    throw new Error('Personagem não encontrado');
  }
  console.log(chosenCharacter);
  return chosenCharacter;
}

getCharacterById("2");

async function filterCharacters() {
  const response = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(response);

  const filteredCharacters = (data
    .filter(character => character.id !== "10" && character.id !== "6"));
  
  console.log(filteredCharacters);
  return filteredCharacters;
}

filterCharacters();

async function getSimpsonsFamily() {
  const response = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(response);

  const simpsonsFamily = data.slice(0, 4);

  console.log(simpsonsFamily);
  return simpsonsFamily;
}

getSimpsonsFamily();

const fsf = require('fs');

function fetchCharacters() {
  return fsf.readFile('./simpsons.json', 'utf-8', (err, data) => {
    return data
  })
}

fetchCharacters();


// Importamos o módulo de promises do fs
const fs = require('fs').promises;

function replaceNelson () {
  // Realizamos a leitura do arquivo
  return fs.readFile('./simpsons.json', 'utf-8')
    // Interpretamos o conteúdo como JSON
    .then((fileContent) => JSON.parse(fileContent))
    // Filtramos o array para remover o personagem Nelson
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    // Criamos um novo Array contendo a personagem Maggie
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    // Escrevemos o novo array no arquivo
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}

replaceNelson();


//Exercício 5
const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFilePromises = strings.map((string, index) => {
    return fs.writeFile(`./file${index + 1 }.txt`, string);
  });

  await Promise.all(createFilePromises);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt'
  ]

  const fileContents = await Promise.all(
    fileNames.map(fileName => fs.readFile(fileName, 'utf-8'))
  );

  const newFileContent = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent);
}

arrayToFile();