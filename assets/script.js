// Assignment code here
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Symbols = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var minLength = 8;
var maxLength = 128;
var protoPass = [];
var randomPassword = [];
function generatePassword() {
  var lengthConfirm = prompt("Choose a length for your password \nMust be between 8 and 128 numbers!");
  if (lengthConfirm < minLength || lengthConfirm > maxLength) {
    alert("Password must be between 8 and 128 characters!");
    return;
  } else {
    alert("Great!");
    var upperCase = confirm("Do you want to use Uppercase Letters?")
    var lowerCase = confirm("Do you want to use Lowercase Letters?")
    var numbers = confirm("Do you want to use numbers?")
    var specChara = confirm("Do you want to use Special Symbols?")
    for (i = 0; i < lengthConfirm; i++) {
      if (upperCase) {
        protoPass.push(upCase);
      }
      if (lowerCase) {
        protoPass.push(lowCase);
      }
      if (numbers) {
        protoPass.push(Num);
      }
      if (specChara) {
        protoPass.push(Symbols);
      }
    }
    for (i = 0; i < lengthConfirm; i++) {
      var random = math.floor(math.random() * protoPass.length);
      var randomArray = protoPass[random];
      randomPassword.push(randomArray);
      return randomPassword;
    }
    randomPassword = randomPassword.join('');
    return randomPassword;
  }
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


