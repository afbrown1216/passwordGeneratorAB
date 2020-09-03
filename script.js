// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // length between 8-128
  passwordLength = prompt("Enter the number of characters between 8 and 128 characters:")
  if (passwordLength >= 8 || passwordLength <= 128) {
    prompt("You must enter a number between 8 and 128 characters:")
  } // else move on 

  // character types 
  // lowercase
  lowerPassword = prompt("Do you want to include a lowercase character?");
  //conditional

  //uppercase
  upperPassword = prompt("Do you want to include an uppercase character?")
  //conditional
  // numeric
  num = prompt("Do you want to include an numeric character?")
  //conditional
  // special characters 
  specChar = prompt("Do you want to include a special character?")
  //conditonal 

  //validate the inputs at least one character type should be slected 

  //generate password 
  //return password 


}



genpassword = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: [123456789],
  specialCharacters: [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"],

}



//   // prompts for password 

// 


// conditional statement for all prompts to be anwnsered with at least one character selected 
// password that matches criteria created 
// password 
// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page