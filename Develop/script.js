// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//function to pull random numbers to decide which characters to use in funcitons below
function randomInt(min,max){
  if (!max){
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list){
  return list[randomInt(list.length)]
}

//Function to create multiple lists for the password to pull from
function generatePassword() {

  var userInput = window.prompt("Required Password length?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)){
    window.alert("Invalid input is not a number")
    return
  }
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Password must be between 8 and 128 charaters")
    return
  }
  // Password will pull from these lists after confirming which ones to accept
  var userWantsNumber = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUpperCase = window.confirm("Would you like uppercase letters in your password?")

  var numberList = ["0","1","2","3","4","5","6","7","8","9"]
  var symbols = ["!","@","#","$","%","^","&","*"]
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  //empty list to hold selected lists
  var optionsCart = []

  // if true will put list into options cart
  if (userWantsNumber === true){
    optionsCart.push(numberList)
  }

  if (userWantsSymbols === true){
    optionsCart.push(symbols)
  }

  if (userWantsLowercase === true){
    optionsCart.push(lowercaseList)
  }

  if (userWantsUpperCase === true){
    optionsCart.push(uppercaseList)
  }
  if (optionsCart.length === 0){
    optionsCart.push(lowercaseList)
  }
  //empty string that will be used to hold randomly selected characters
  var generatedPassword = ""
  
  for (var i = 0; i < passwordLength; i++){
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  
  return generatedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
