//1 Como o primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! Faça a piada aparecer no DOM da sua página!

const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

const fetchJoke = () => {
const jokeContainer = document.getElementById('jokeContainer');
    fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => jokeContainer.innerHTML = data.joke);
};

window.onload = () => fetchJoke();
