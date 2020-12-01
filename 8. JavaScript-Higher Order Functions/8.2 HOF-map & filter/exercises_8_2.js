const assert = require('assert');

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

const expectedResultA = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft'
];

//1 Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
function formatedBookNames() {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
}

assert.deepEqual(formatedBookNames(), expectedResultA);

const expectedResultB = [
    {
      age: 31,
      author: 'Isaac Asimov'
    },
    {
      age: 38,
      author: 'H. P. Lovecraft'
    },
    {
      age: 39,
      author: 'Stephen King'
    },
    {
      age: 43,
      author: 'George R. R. Martin'
    },
    {
      age: 45,
      author: 'Frank Herbert'
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien'
    }
  ];
  
  //2 Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
  function nameAndAge() {
     const ageReleasedOrder = books.sort((bookA, bookB) => (bookA.releaseYear - bookA.author.birthYear) - (bookB.releaseYear - bookB.author.birthYear));

     return ageReleasedOrder.map((book) => {
        return {age: book.releaseYear - book.author.birthYear, author: book.author.name};
     })
  }
  assert.deepEqual(nameAndAge(), expectedResultB);

  const booksB = [
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

  const expectedResultC = [
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
   ]

  //3 Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
  function fantasyOrScienceFiction() {
    return booksB.filter((book) => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia'));
  }
  
  assert.deepEqual(fantasyOrScienceFiction(), expectedResultC);

  const expectedResultD = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954
    }
  ]
  
  //4 Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
  function oldBooks() {
    return booksB.filter((book) => 2020 - book.releaseYear > 60).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
  }
  
  assert.deepEqual(oldBooks(), expectedResultD);