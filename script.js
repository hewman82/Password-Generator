// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character lists
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
  // Character length prompt
  var passLength = prompt('Please choose a character length between 8 and 128 characters');
  // Tests that character length is within acceptable range
  if (passLength < 8 || passLength > 128) {
    alert('Please choose a character length between 8 and 128');
    } 

  var includeUpper = prompt('Would you like to include Upper Case letters?').toLowerCase();
  var includeLower = prompt('Would you like to include Lower Case letters?').toLowerCase();
  var includeSpecial = prompt('Would you like to include Special Characters?').toLowerCase();
  
  for(i = 0; i < passLength; i++) {
    if(includeLower == 'yes' && passChar.length < passLength) {
      passChar = passChar + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if(includeUpper == 'yes' && passChar.length < passLength) {
      passChar = passChar + upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if(includeSpecial == 'yes' && passChar.length < passLength) {
      passChar = passChar + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  }
  return(passChar);

}


  
  










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);