// Assignment Code
var generateBtn = document.querySelector("#generate");

// Begin password 
function generatePassword() {

  // Prompt user for length of password (b/w 8 and 128)
  let passwordLength = prompt('Please choose a password length between 8 and 128 characters.')

  // Validate input
  if (passwordLength < 8 || passwordLength > 128 || NaN) {
    alert('Your password length is outside the required range of 8 and 128 characters.')
    return;
  }

  // Prompt user for use of uppercase, lowercase, numbers, special characters
  let charLowerCase = confirm('Would you like to include lowercase letters?')

  let charUpperCase = confirm('Would you like to include uppercase letters?')

  let charNumbers = confirm('Would you like to include numbers?')

  let charSpecial = confirm('Would you like to include special characters?')

  // Validate input (at least one character type selected)
  if (!charLowerCase && !charUpperCase && !charNumbers && !charSpecial) {
    alert('Please select at least one character type')
  }

  // Provide character options
  let selectedCriteria = ''
  let password = ''

  if (charLowerCase) {
    selectedCriteria += 'abcdefghijklmnopqrstuvwxyz'
  }
  if (charUpperCase) {
    selectedCriteria += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if (charNumbers) {
    selectedCriteria += '1234567890'
  }
  if (charSpecial) {
    selectedCriteria += ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
  }

  // Generate password based on selected criteria
  for (let i = 0; i < passwordLength; i++) {
    password += selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)]
  }

  // Display password on the page
  return (password)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
