// Assignment code here
//Characterset Constants for password generation

const caseSm = "abcdefghijklmnopqrstuvwxyz";
const caseLg = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const caseNum = "1234567890"
const caseSpc = "~!@#$%^&*()_+`{}|[]\,./<>?";


//Generate Password Function
function generatePassword() {

//This creates the password length variable, and prompts the user to define the size of their desired password
var passlength = prompt("Please enter your desired password length between 8 and 128 characters");

//Password Length validation
while (passlength < 8 | passlength > 128) {
  passlength = prompt("Password length is outside of range parameters. 8-124 characters required.");
};

//Prompt for characterset constants in ln 4-7
var caseSm = confirm("Use lowercase characters?");
var caseLg = confirm("Use uppercase characters?");
var caseNum = confirm("Use numbers?");
var caseSpc = confirm("Use non-letter/non-numeric characters?");

};

// Validates character type using a while loop
while (!caseSm && !caseLg && !caseNum && !caseSpc){
     caseSm = confirm("Use lowercase characters?");
     caseLg = confirm("Use uppercase characters?");
     caseNum = confirm("Use numbers?");
     caseSpc = confirm("Use non-letter/non-numeric characters?");
};






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Get reference to the #password elemet
var passwordText =document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
