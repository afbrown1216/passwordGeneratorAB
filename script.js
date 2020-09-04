// Assignment Code
var generateBtn = document.querySelector("#generate");
var passArray = [];

// Character generation variables 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [1,2,3,4,5,6,7,8,9];
var specialCharacters = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//call writePassword function 
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // length between 8-128
  passwordLength = prompt("Pick a character count between 8 and 128 for your password:")
  if (passwordLength < 8 || passwordLength > 128) {
    prompt("You must enter a number between 8 and 128 characters:")
  } 
  console.log("Password Character length: ", passwordLength)
 //conditional if true generate a password with this many characters 
  // character types 
  // lowercase
  var lCCharacter = confirm("Do you want to include a lowercase character?");
  if(lCCharacter){
    passArray.push(lowerCase);
  }
  console.log("Lowercase Characters included: ", lCCharacter);
  console.log("Password Characters available: ",passArray);
  //conditional if true generate a password with lowercase character
  //else do not generate a password with a lowercase character 
  //create a function for a password with a lowercase character 
  //uppercase
  var uCCharacter = confirm("Do you want to include an uppercase character?");
  if(uCCharacter){
    passArray.push(upperCase);
  }

  console.log("Uppercase Characters included: ", uCCharacter);
  console.log("Password Characters available: ",passArray);
  //conditional if true generate a password with uppercase character 
  //elsef do not generate a password with a  lowercase character
  //create a function for a password with a uppercase character 
  // numeric
  var num = confirm("Do you want to include an numeric character?");
  if (num){
    passArray.push(numeric);
  }
  console.log("Numeric Characters included: ", num);
  console.log("Password Characters available: ", passArray);
  //conditional if true generate a password with a numeric character 
  //else do not genrate a password with a numeric character 
  //create a function for a password with a
  // special characters 
  var specChar = confirm("Do you want to include a special characters?");
  if (specChar) {
    passArray.push(specialCharacters);
  }
  console.log("Special Characters included: ", specChar);
  console.log("Password Characters available: ", passArray);


  //validate the inputs at least one character type should be selected might put outside to call over again
  var confirmPassword = confirm(
    "Created a password with the following characters:  Lowercase" + lCCharacter
     + " Uppercase " + uCCharacter
     + " Numeric " + num 
     + "Special Characters " + specChar)
    if (!confirmPassword){
      generatePassword();
    }

  //number generation 
    for (i = 1; i > passwordLength; i++ ){

      var randomIndex = Math.floor(Math.random() * passArray.length) 
    
    
    } 
 //create a function for a password with a a special character

  

  //generate password 
  //return password 


}

//functions 
//generate password with x many characters for loop i<=x then pick each characrter option 
//generate a password with lowercase character pick a  i = randomnumber between 1-28 then do lowercase[i]
// generate a password with uppercase characters pick a i = random number between 1-28 then do uppercase[i]
//generate a password with speical characters pick a random number between the specialCharacter.length to insert into the password array 


// genpassword = {
//   // 97-122 charset
//   //65-90  charset


// };


//for loop that is going through the 

//   // prompts for password 

// 


// conditional statement for all prompts to be anwnsered with at least one character selected 
// password that matches criteria created 
// password 
// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page


// when they pick characters add that array into the password array after each character question. at the end you will do a for loop over it to randomly 
//remeber to empty the mega array at the end 





// variables 


// function dfintions 
// function calls 
// event listeners 
