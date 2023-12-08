// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('Button is working')

// 1. Prompt user for length of password (b/w 8 and 128)
// 2. Prompt user for use of uppercase, lowercase, numbers, special characters



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
