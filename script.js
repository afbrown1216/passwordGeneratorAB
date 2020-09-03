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
  passwordLength = prompt("Enter a length between 8 and 128 characters:")
  if(passwordLength <8 || passwordLength > 128){
    prompt("Enter")
  } // else move on 

  // character types 
// lowercase
lowerPassword = prompt("")
//uppercase
// // upperPassword = prompt 
// numeric
// // num = prompt 
// special characters 
// // specChar = 


}


//   // prompts for password 

// 


// conditional statement for all prompts to be anwnsered with at least one character selected 
// password that matches criteria created 
// password 
// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page




