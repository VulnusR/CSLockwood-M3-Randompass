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
var useCaseSm = confirm("Use lowercase characters?");
var useCaseLg = confirm("Use uppercase characters?");
var useCaseNum = confirm("Use numbers?");
var useCaseSpc = confirm("Use non-letter/non-numeric characters?");

// Validates character type using a while loop
while (!useCaseSm && !useCaseLg && !useCaseNum && !useCaseSpc){
  useCaseSm = confirm("Use lowercase characters?");
  useCaseLg = confirm("Use uppercase characters?");
  useCaseNum = confirm("Use numbers?");
  useCaseSpc = confirm("Use non-letter/non-numeric characters?");
 };



//Declaring a new variable for characterset initalization
var passCharactercase = "";

//Initalizing character set
if (useCaseSm) passCharactercase = caseSm
if (useCaseLg) passCharactercase = caseLg
if (useCaseNum) passCharactercase = caseNum
if (useCaseSpc) passCharactercase = caseSpc










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
