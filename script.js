// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  console.log('Button is working')

// 1. Prompt user for length of password (b/w 8 and 128)
let passwordLength = prompt('Please choose a password length between 8 and 128 characters.')
console.log(passwordLength)
// Validate input
if (passwordLength < 8 || passwordLength > 128 || NaN) {
  alert('Your password length is outside the required range of 8 and 128 characters.')
}

// 2. Prompt user for use of uppercase, lowercase, numbers, special characters
let charLowerCase = confirm('Would you like to include lowercase letters?')
console.log(charLowerCase)

let charUpperCase = confirm('Would you like to include uppercase letters?')
console.log(charUpperCase)

let charNumbers = confirm('Would you like to include numbers?')
console.log(charNumbers)

let charSpecial = confirm('Would you like to include special characters?')
console.log(charSpecial)

// 3. Validate input (at least one character type selected)


// 4. Generate password based on selected criteria


// 5. Display password on the page
  return('Generated password')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
