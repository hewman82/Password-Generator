// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character lists
var specialCharacters = ['!','"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// Character prompts
var charLength = prompt('Please choose a character length between 8 and 128 characters');
var includeSpecial = prompt('Would you like to include Special Characters?').toLowerCase();
var includeUpper = prompt('Would you like to include Upper Case letters?').toLowerCase();
var includeLower = prompt('Would you like to include Lower Case letters?').toLowerCase();




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);