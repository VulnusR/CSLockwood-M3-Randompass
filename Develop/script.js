// Assignment code here
//Characterset Constants for password generation

const casesm = "abcdefghijklmnopqrstuvwxyz"
const caselg = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const casenum = "1234567890"
const casespc = "!@#$%^&*()_+-={}[]`~,.<>/?|"


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
