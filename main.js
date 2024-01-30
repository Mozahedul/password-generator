const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "~!@#$%^&*()_+{}[]/;'`:?";

const passwordElm = document.getElementById("password");
const generateBtn = document.getElementById("generate");
// Options
const lengthElm = document.getElementById("length");
const lowercaseElm = document.getElementById("lowercase");
const uppercaseElm = document.getElementById("uppercase");
const numberElm = document.getElementById("number");
const specialCharsElm = document.getElementById("specialChars");

generateBtn.addEventListener("click", function () {
  const length = lengthElm.value;
  let characters = "";
  let password = "";

  if (lowercaseElm.checked) {
    characters += lowercaseLetters;
  }

  if (uppercaseElm.checked) {
    characters += uppercaseLetters;
  }

  if (numberElm.checked) {
    characters += numbers;
  }

  if (specialCharsElm.checked) {
    characters += specialChars;
  }

  for (let i = 0; i < length; i++) {
    const randomNumbersWithDecimal = Math.random() * characters.length;
    const randomIntegerValue = Math.floor(randomNumbersWithDecimal);
    const randomCharacters = characters.charAt(randomIntegerValue);
    password += randomCharacters;
  }
  passwordElm.value = password;
});
