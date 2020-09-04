// Assignment Code
var generateBtn = document.querySelector("#generate");
var availableCharacters = "";
var newPassword = "";

// Character generation variables 
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

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
  //Prompts and confirms
  passwordLength = prompt("Pick a character count between 8 and 128 for your password:")
  var lCCharacter = confirm("Do you want to include a lowercase character?");
  var uCCharacter = confirm("Do you want to include an uppercase character?");
  var num = confirm("Do you want to include an numeric character?");
  var specChar = confirm("Do you want to include a special characters?");


  //Conditional statement 

  if (passwordLength < 8 || passwordLength > 128) {
    prompt("Please enter a number between 8 and 128 characters:")
  }; 
  if(lCCharacter){
    availableCharacters = availableCharacters + lowerCase;
  };
   if(uCCharacter){
    availableCharacters = availableCharacters + upperCase;
  };
  if (num){
    availableCharacters = availableCharacters + numeric;
  };
  if (specChar) {
    availableCharacters = availableCharacters + specChar;
  };

    //validate the inputs at least one character type should be selected might put outside to call over again
    var confirmPassword = confirm(
      "Created a password with the following characters:  Lowercase " + lCCharacter
       + " Uppercase " + uCCharacter
       + " Numeric " + num 
       + "Special Characters " + specChar)
      if (!confirmPassword){
        generatePassword();
      }
    //number generation 
    for (i = 1; i < passwordLength; i++ ){

      var randomNumber = Math.floor(Math.random() * availableCharacters.length);
      console.log(randomNumber)
      var randomCharacter = availableCharacters[randomNumber];
      console.log(randomCharacter);
      
     
     newPassword += randomCharacter;
     console.log(newPassword);
    
    } 

    //return password 
    
    return newPassword 
  // length between 8-128
 
  

  

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
// console.log("Password Character length: ", passwordLength)
//conditional if true generate a password with this many characters 
 // character types 
 // lowercase

//  console.log("Lowercase Characters included: ", lCCharacter);
 // console.log("Password Characters available: ",passArray);
 //conditional if true generate a password with lowercase character
 //else do not generate a password with a lowercase character 
 //create a function for a password with a lowercase character 
 //uppercase
 

//  console.log("Uppercase Characters included: ", uCCharacter);
 // console.log("Password Characters available: ",passArray);
 //conditional if true generate a password with uppercase character 
 //elsef do not generate a password with a  lowercase character
 //create a function for a password with a uppercase character 
 // numeric
 
//  console.log("Numeric Characters included: ", num);
 // console.log("Password Characters available: ", passArray);
 //conditional if true generate a password with a numeric character 
 //else do not genrate a password with a numeric character 
 //create a function for a password with a
 // special characters 

//  console.log("Special Characters included: ", specChar);
 // console.log("Password Characters available: ", passArray);




//create a function for a password with a a special character

 

 //generate password 