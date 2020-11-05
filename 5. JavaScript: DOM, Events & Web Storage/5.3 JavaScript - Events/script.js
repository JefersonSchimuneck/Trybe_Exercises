function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
// Exercício 1
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (index = 0; index < dezDaysList.length; index += 1) {
      let day = dezDaysList[index];
      let days = document.createElement('li');

      if (day === 24 || day === 31) {
        days.className = 'day holiday';
      } else if (day === 4 || day === 11 || day === 18) {
        days.className = 'day friday';
      } else if (day === 25) {
        days.className = 'day friday holiday';
      } else {
        days.className = 'day';
      }

      days.innerText = day;
      document.getElementById('days').appendChild(days);
    }   
}
createDaysOfTheMonth();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function createButtonF(nameButtonF) {
  let buttonHolyday = document.createElement('button');
  buttonHolyday.innerText = nameButtonF;
  buttonHolyday.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(buttonHolyday);  
}

let buttonFeriados = "Feriados";
createButtonF(buttonFeriados);

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
const buttonFeriadoEvent = document.getElementById('btn-holiday');
buttonFeriadoEvent.addEventListener('click', function() {
  const holidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidays.length; index +=1) {
    if (holidays[index].style.backgroundColor === 'rgb(251, 110, 123)') {
      holidays[index].style.backgroundColor = '#EEEEEE';
    } else {
      holidays[index].style.backgroundColor = 'rgb(251, 110, 123)';
    }
  }
});

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function createButtonS(nameButtonS) {
  let buttonFriday = document.createElement('button');
  buttonFriday.innerText = nameButtonS;
  buttonFriday.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(buttonFriday);  
}

let buttonSexta= "Sexta-feira";
createButtonS(buttonSexta);

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
const sextasFeiras = [4, 11, 18, 25]
const buttonSextaEvent = document.getElementById('btn-friday');
buttonSextaEvent.addEventListener('click', function() {
  const sextas = document.querySelectorAll('.friday');
  for (let index = 0; index < sextas.length; index +=1) {
    if (sextas[index].innerHTML !== 'Sextou!!') {
      sextas[index].innerHTML = 'Sextou!!';
    } else {
      sextas[index].innerHTML = sextasFeiras[index];
    }
  }
});

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.