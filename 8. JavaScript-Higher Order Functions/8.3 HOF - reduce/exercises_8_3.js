const assert = require('assert');

//1 Dada uma matriz de matrizes, transforme em uma única matriz.
const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  return arrays.reduce((accumulator, array) => accumulator.concat(array));
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);

//2 Crie uma string com os nomes de todas as pessoas autoras.
const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  
  function allNames() {
    return `Nomes:${books.reduce((accumulator, book) => (accumulator.concat(' '+book.author.name)), [])}.`;
  }

assert.deepStrictEqual(allNames(), "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");

//3 Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResultC = 43;

function averageAge() {
  return books.reduce((accumulator, book) => (accumulator + (book.releaseYear - book.author.birthYear)), 0) / books.length;
}

assert.strictEqual(averageAge(), expectedResultC);

//4 Encontre o livro com o maior nome.
const expectedResultD = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin'
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991
  };
  
  function longestNamedBook() {
    return books.reduce((longestTitle, currentTitle) => {
        if (longestTitle.name.length > currentTitle.name.length){
            return longestTitle;
        }
        return currentTitle
    })
  }
  
  assert.deepStrictEqual(longestNamedBook(), expectedResultD);
  