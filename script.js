// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declare prompt input variables
let passLength = 0;


// Declare and define variables for character lists
let specialCharacters = ['!','"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let passChar = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Test character length prompt input for numbers outside acceptable range and non-number input, store valid input as variable
  do { 
    passLength = prompt('Please choose a character length between 8 and 128 characters');
    if (isNaN(passLength)) {
      return ('Not a number! Please try again.');
    }
  } while (passLength < 8 || passLength > 128);

  var includeUpper = confirm('Would you like to include Upper Case letters?');
  var includeLower = confirm('Would you like to include Lower Case letters?');
  var includeSpecial = confirm('Would you like to include Special Characters?');
  
  for(i = 0; i < passLength; i++) {
    if(includeLower === true && passChar.length < passLength) {
      passChar = passChar + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if(includeUpper === true && passChar.length < passLength) {
      passChar = passChar + upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if(includeSpecial === true && passChar.length < passLength) {
      passChar = passChar + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  }
  return(passChar);

}


  
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);