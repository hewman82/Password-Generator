// Assignment Code
var generateBtn = document.querySelector("#generate");


// Declare and define variables for character lists
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numbers = ['1','2','3','4','5','6','7','8','9','0'];
let specialCharacters = ['!','"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  
  let passChar = "";

  // Loop character length prompt until user enters a number within the acceptable range, store valid input as variable
  do { 
    // Prompt for a character length between 8 and 128
    passLength = prompt('Please choose a character length between 8 and 128 characters');
    // Alert and exit function if the input is not a number
    if (isNaN(passLength)) {
      alert ('Not a number! Please try again.')
      return ('Try again.');
    }
    // Exit function if the user cancels
    if (passLength === null) {
      return ("Try again.");
    }
    // Repeat until a number within the acceptable range is entered
  } while (passLength < 8 || passLength > 128);
  alert ('You have selected ' + passLength + ' characters.');

  // Allow user to select character types to include
  var includeLower = confirm('Would you like to include Lower Case letters?');
  if (includeLower) {
    alert ('Lower Case characters will be included.')
  }
  var includeUpper = confirm('Would you like to include Upper Case letters?');
  if (includeUpper) {
    alert ('Upper Case characters will be included.')
  }
  var includeNumbers = confirm('Would you like to include Numbers?');
  if (includeNumbers) {
    alert ('Numbers will be included.');
  }
  var includeSpecial = confirm('Would you like to include Special Characters?');
  if (includeSpecial) {
    alert ('Special Characters will be included');
  }
  if (!includeLower && !includeUpper && !includeNumbers && !includeSpecial) {
    alert ('Please select at least one character type.');
    return('Try again.');
  }
  
  // Generate random characters within character lists depending on selected character types and character length, loop until selected length is reached
  for(i = 0; i < passLength; i++) {
    // Test if the user chose to include the character type and that the generated password characters haven't exceeded the selected character length
    if(includeLower === true && passChar.length < passLength) {
      // Add a randomly selected index item from the array of that character type to the password character array
      passChar = passChar + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    // Repeat for remaining character types
    if(includeUpper === true && passChar.length < passLength) {
      passChar = passChar + upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if(includeNumbers === true && passChar.length < passLength) {
      passChar = passChar + numbers[Math.floor(Math.random() * numbers.length)];
    }
    if(includeSpecial === true && passChar.length < passLength) {
      passChar = passChar + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  }

  // Return generated password
  return(passChar);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);