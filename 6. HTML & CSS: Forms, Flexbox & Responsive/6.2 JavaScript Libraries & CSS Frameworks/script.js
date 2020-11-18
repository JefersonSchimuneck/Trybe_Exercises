const statesField = document.getElementById("state");
const states = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RO",
  "RS",
  "RR",
  "SC",
  "SE",
  "SP",
  "TO",
];

for (let index = 0; index < states.length; index += 1) {
  let newState = document.createElement("option");
  newState.value = states[index];
  newState.innerText = states[index];
  statesField.appendChild(newState);
}

const submitButton = document.getElementById("submit");
const inputFields = document.querySelectorAll("input");
const resumeField = document.querySelector(".resume");

new window.JustValidate('.js-form');

submitButton.addEventListener("click", function () {
  new window.JustValidate('.js-form');
});

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function (event) {
  clear()
  event.preventDefault();
});

 function clear() {
  const printedResume = document.querySelectorAll("p");
  for (let index = 0; index < printedResume.length; index += 1) {
      resumeField.removeChild(printedResume[index]);
      inputFields[index].value = "";    
  }
 }

 document.getElementById('start-date').DatePickerX.init({format: 'dd/mm/yyyy'});
 
//justvalidate
 new window.JustValidate('.js-form');
