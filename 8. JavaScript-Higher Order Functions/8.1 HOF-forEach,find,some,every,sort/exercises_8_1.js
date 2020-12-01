const assert = require("assert");

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}

assert.equal(authorBornIn1947(), "Stephen King");

//2 Retorne o nome do livro de menor nome.
function smallerName() {
  let nameBook = books[0].name;
  books.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}

assert.equal(smallerName(), "Duna");

//3 Encontre o primeiro livro cujo nome possui 26 caracteres.
const expectedResult = {
  author: {
    birthYear: 1948,
    name: "George R. R. Martin",
  },
  genre: "Fantasia",
  id: 1,
  name: "As Crônicas de Gelo e Fogo",
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}

assert.deepEqual(getNamedBook(), expectedResult);

//4 Ordene os livros por data de lançamento em ordem decrescente.
const expected_result = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: { name: "George R. R. Martin", birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: { name: "Stephen King", birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: { name: "Frank Herbert", birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: { name: "J. R. R. Tolkien", birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: { name: "Isaac Asimov", birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: { name: "H. P. Lovecraft", birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}

assert.deepEqual(booksOrderedByReleaseYearDesc(), expected_result);

//5 Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
const expected_resultB = false;

function everyoneWasBornOnSecXX() {
  return books.every(
    (book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000
  );
}

assert.equal(everyoneWasBornOnSecXX(), expected_resultB);

//6 Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const expectedResultC = true;

function someBookWasReleaseOnThe80s() {
  return books.some(
    (book) => book.releaseYear >= 1980 && book.releaseYear <= 1989
  );
}

assert.equal(someBookWasReleaseOnThe80s(), expectedResultC);

//7 Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const expected_resultD = false;

function authorUnique() {
  let verifier = true;
  books.forEach((book) => {
    for (let index = 0; index < books.length; index += 1) {
      if (book.id !== books[index].id) {
        if (book.author.birthYear === books[index].author.birthYear) {
          verifier = false;
        }
      }
    }
  });
  return verifier;
}

assert.equal(authorUnique(), expected_resultD);
