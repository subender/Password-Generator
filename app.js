//Input/Output Fields
const passwordEl = document.querySelector("#pw");
const passLengthEl = document.querySelector("#size");
const allCheckboxes = document.querySelectorAll("input[type=checkbox]");

//Check-Boxes
const upperCaseCheckbox = document.querySelector("#upper-case");
const lowerCaseCheckbox = document.querySelector("#lower-case");
const numberCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");

//Buttons
const copyBtn = document.querySelector("#copy");
const generateBtn = document.querySelector("#generate");

//Password Contents
const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
const numberStr = "1234567890";
const symbolStr = "!@#$%^&*()-=+/?][{}";

//Event Listners
/////////////////////////

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

//Functions
////////////////////////

//To get one random capital letter from upperCaseStr.
function getCapitalLetter() {
  return upperCaseStr[Math.floor(Math.random() * upperCaseStr.length)];
}

//To get one random lowerCase letter from lowerCaseStr.
function getSmallLetter() {
  return lowerCaseStr[Math.floor(Math.random() * lowerCaseStr.length)];
}

//To get one random Number from numberStr.
function getNumber() {
  return numberStr[Math.floor(Math.random() * numberStr.length)];
}

//To get one random Symbol from symbolStr
function getSymbol() {
  return symbolStr[Math.floor(Math.random() * symbolStr.length)];
}

//To generate a passord and display it.
function generatePassword() {
  const passLength = passLengthEl.value;
  let password = "";

  if (upperCaseCheckbox.checked) {
    password += getCapitalLetter();
  }

  if (lowerCaseCheckbox.checked) {
    password += getSmallLetter();
  }
  if (numberCheckbox.checked) {
    password += getNumber();
  }
  if (symbolsCheckbox.checked) {
    password += getSymbol();
  }

  for (let i = password.length; i < passLength; i++) {
    const randomAlphabet = generate();
    password += randomAlphabet;
  }

  passwordEl.innerText = password;
}

//This function will generate and return random alphabet, number or symbol.
function generate() {
  const combinationArr = [];

  if (upperCaseCheckbox.checked) {
    combinationArr.push(getCapitalLetter());
  }

  if (lowerCaseCheckbox.checked) {
    combinationArr.push(getSmallLetter());
  }
  if (numberCheckbox.checked) {
    combinationArr.push(getNumber());
  }
  if (symbolsCheckbox.checked) {
    combinationArr.push(getSymbol());
  }

  if (combinationArr.length === 0) {
    return "";
  }
  return combinationArr[Math.floor(Math.random() * combinationArr.length)];
}

//To copy the generated password to clipboard.
function copyPassword() {
  const textArea = document.createElement("textarea");

  const password = passwordEl.innerText;

  if (!password) return;

  textArea.value = password;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Password Copies to Clipboard");
  passwordEl.innerText = "Password";

  //Un-Check all the checkboxes after copying the password.
  allCheckboxes.forEach((checkBox) => {
    checkBox.checked = false;
  });
}
