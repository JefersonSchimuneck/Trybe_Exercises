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

const startDate = document.getElementById("start-date");

function verifyDate() {
  let date = startDate.value;
  let dateError = 0;
  if (date.length < 10) {
    dateError += 1;
  } else if (date[0] + date[1] < 1 || date[0] + date[1] > 31) {
    dateError += 1;
  } else if (date[3] + date[4] < 1 || date[3] + date[4] > 12) {
    dateError += 1;
  } else if (date[6] + date[7] + date[8] + date[9] < 0) {
    dateError += 1;
  } else if (date[2] != "/" || date[5] != "/") {
    dateError += 1;
  }
  if (dateError > 0) {
    alert("Formato de data inválido");
  } else {
    return true
  }
}

const submitButton = document.getElementById("submit");
const inputFields = document.querySelectorAll("input");
const resumeField = document.querySelector(".resume");
function verifyFilled() {
  let emptyError = 0;
  for (let index = 0; index < inputFields.length; index += 1) {
    if (inputFields[index].type == "text") {
      if (inputFields[index].value == "" || inputFields[index].value == null) {
        emptyError += 1;
      }
    }
  }
  if (emptyError > 0) {
    alert("Preencha todos os campos");
  } else {
    return true
  }
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (verifyFilled() && verifyDate()){
    printResume();
  }  
});

function printResume() {
  for (let index = 0; index < inputFields.length; index += 1) {
    if (inputFields[index].type == "text") {
      let printInfo = document.createElement("p");
      printInfo.innerHTML =
        inputFields[index].name + " " + inputFields[index].value;
      resumeField.appendChild(printInfo);
    }
  }
}

function clear() {
  const printedResume = document.querySelectorAll("p");
  for (let index = 0; index < printedResume.length; index += 1) {
    resumeField.removeChild(printedResume[index]);
  }
  for (let index = 0; index < inputFields.length; index += 1) {
    if (inputFields[index].type == "text") {
      inputFields[index].value = ""
    }
}
}

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function (event) {
  clear();
  event.preventDefault();
});
