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
  startDate.addEventListener("change", function () {
    let date = startDate.value;
    let error = 0;
    if (date.length < 10) {
error +=1;
    } else if (date[0] + date[1] < 1 || date[0] + date[1] > 31) {
      error +=1;
    } else if (date[3] + date[4] < 1 || date[3] + date[4] > 12) {
      error +=1;
    } else if (date[6] + date[7] + date[8] + date[9] < 0) {
      error +=1;
    } else if (date[2] != "/" || date[5] != "/") {
      error +=1;
    }
    return error;
  });
}
verifyDate()

const submitButton = document.getElementById("submit");
const inputFields = document.querySelectorAll("input");
const resumeField = document.querySelector(".resume");

// function verifyFilled() {
//   for (let index = 0; index < inputFields.length; index += 1) {
//     if (inputFields[index].type == "text") {
//       if ((inputFields[index].value = "")) {
//         console.log('teste')
//       }
//     }
//   }
// }

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (verifyDate() > 0) {
    alert('teste')
  }
})
  
// });

// function printResume() {
//   for (let index = 0; index < inputFields.length; index += 1) {
//     if (inputFields[index].type == "text") {
//       let printInfo = document.createElement("p");
//       printInfo.innerHTML =
//         inputFields[index].name + " " + inputFields[index].value;
//       resumeField.appendChild(printInfo);
//     }
//   }
// }

// function clear() {
//   const printedResume = document.querySelectorAll("p");
//   for (let index = 0; index < printedResume.length; index += 1) {
//     resumeField.removeChild(printedResume[index]);
//     inputFields[index].value = "";
//   }
// }

// const clearButton = document.getElementById("clear");
// clearButton.addEventListener("click", function (event) {
//   clear();
//   event.preventDefault();
// });
