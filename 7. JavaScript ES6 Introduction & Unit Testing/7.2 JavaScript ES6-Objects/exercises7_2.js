//Parte 1
const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// 1 Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
const customerInfo = (order) => {
  console.log(
    `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`
  );
};
customerInfo(order);

//2 Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."Modifique o nome da pessoa compradora.Modifique o valor total da compra para R$ 50,00.
const orderModifier = (order) => {
  order.name = "Luiz Silva";
  order.payment.total = "50";
  console.log(
    `Olá ${order.name}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ ${order.payment.total}.`
  );
};
orderModifier(order);

//Parte 2
const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//1 Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const shiftAdder = (object, key, value) => (object[key] = value);
console.log(shiftAdder(lesson2, "turno", "manhã"));

//2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const printKeys = (object) => Object.keys(object);
console.log(printKeys(lesson2));

//3 Crie uma função para mostrar o tamanho de um objeto.
const objectSize = (object) => Object.keys(object).length;
console.log(objectSize(lesson2));

//4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro..
const printValues = (object) => Object.values(object);
console.log(printValues(lesson2));

//5 Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

//6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalStudents = (object) =>
  object.lesson1.numeroEstudantes +
  object.lesson2.numeroEstudantes +
  object.lesson3.numeroEstudantes;
console.log(totalStudents(allLessons));

//7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (object, position) => Object.values(object)[position];
console.log(getValueByNumber(lesson1, 0));

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (object, key, value) => {
  const entries = Object.entries(object);
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) {
      return true;
    }
  }
  return false;
};
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
