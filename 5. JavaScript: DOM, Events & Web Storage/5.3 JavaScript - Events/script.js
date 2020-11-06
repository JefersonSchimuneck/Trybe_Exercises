function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();
// Exercício 1
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
function createDaysOfTheMonth() {
  const dezDaysList = [
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let days = document.createElement("li");

    if (day === 24 || day === 31) {
      days.className = "day holiday";
    } else if (day === 4 || day === 11 || day === 18) {
      days.className = "day friday";
    } else if (day === 25) {
      days.className = "day friday holiday";
    } else {
      days.className = "day";
    }

    days.innerText = day;
    document.getElementById("days").appendChild(days);
  }
}
createDaysOfTheMonth();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function createButtonF(nameButtonF) {
  let buttonHolyday = document.createElement("button");
  buttonHolyday.innerText = nameButtonF;
  buttonHolyday.id = "btn-holiday";
  document.querySelector(".buttons-container").appendChild(buttonHolyday);
}

let buttonFeriados = "Feriados";
createButtonF(buttonFeriados);

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
const buttonFeriadoEvent = document.getElementById("btn-holiday");
buttonFeriadoEvent.addEventListener("click", function () {
  const holidays = document.querySelectorAll(".holiday");
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === "rgb(251, 110, 123)") {
      holidays[index].style.backgroundColor = "#EEEEEE";
    } else {
      holidays[index].style.backgroundColor = "rgb(251, 110, 123)";
    }
  }
});

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function createButtonS(nameButtonS) {
  let buttonFriday = document.createElement("button");
  buttonFriday.innerText = nameButtonS;
  buttonFriday.id = "btn-friday";
  document.querySelector(".buttons-container").appendChild(buttonFriday);
}

let buttonSexta = "Sexta-feira";
createButtonS(buttonSexta);

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
const sextasFeiras = [4, 11, 18, 25];
const buttonSextaEvent = document.getElementById("btn-friday");
buttonSextaEvent.addEventListener("click", function () {
  const sextas = document.querySelectorAll(".friday");
  for (let index = 0; index < sextas.length; index += 1) {
    if (sextas[index].innerHTML !== "Sextou!!") {
      sextas[index].innerHTML = "Sextou!!";
    } else {
      sextas[index].innerHTML = sextasFeiras[index];
    }
  }
});

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. Dica - Propriedade: event.target.
const daysList = document.querySelectorAll(".day");

for (let index = 0; index < daysList.length; index += 1) {
  daysList[index].addEventListener("mouseover", function () {
    if ((daysList[index].style.fontSize = "20px")) {
      daysList[index].style.fontSize = "25px";
    }
  });

  daysList[index].addEventListener("mouseleave", function () {
    if ((daysList[index].style.fontSize = "25px")) {
      daysList[index].style.fontSize = "20px";
    }
  });
}

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function createTask(task) {
  let taskName = document.createElement("span");
  taskName.innerText = task;
  document.querySelector(".my-tasks").appendChild(taskName);
}

let taskCreated = "Projeto";
createTask(taskCreated);

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function createIcon(color) {
  let iconCreated = document.createElement("div");
  iconCreated.className = "task";
  iconCreated.style.backgroundColor = color;
  document.querySelector(".my-tasks").appendChild(iconCreated);
}

let taskColor = "blue";
createIcon(taskColor);

// Exercício 9:
// Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

let interactTask = document.querySelector(".task");
interactTask.addEventListener("click", function () {
  if (interactTask.className == "task selected") {
    interactTask.className = "task";
  } else {
    interactTask.className = "task selected";
  }
});

// Exercício 10:
// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).
let taskButton = document.querySelector(".task");
for (let index = 0; index < daysList.length; index += 1) {
  daysList[index].addEventListener("click", function () {
    if (taskButton.className == "task selected") {
      if (daysList[index].style.color == taskColor) {
        daysList[index].style.color = "rgb(119,119,119)";
      } else {
        daysList[index].style.color = taskColor;
      }
    }
  });
}

// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: keyCode.

let addButton = document.getElementById("btn-add");
let inputText = document.getElementById("task-input");

addButton.addEventListener("click", function () {
  addCommitment();
});

inputText.addEventListener("keypress", function (press) {
  if (press.key === "Enter") {
    addCommitment();
  }
});

function addCommitment() {
  if (inputText.value.length == 0) {
    alert("Preenchimento Obrigatório");
  } else {
    let newTask = document.createElement("li");
    newTask.innerText = inputText.value;
    document.querySelector(".task-list").appendChild(newTask);
    inputText.value = "";
  }
}
