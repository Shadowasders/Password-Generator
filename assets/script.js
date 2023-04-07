// Assignment code here
//setting all the different pools of characters for the passwords
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "\""];
var minLength = 8;
var maxLength = 128;

function generatePassword() {
  //setting a empty array for the mixed pools
  var randomPassword = [];
  var protoPass = [];
  var lengthConfirm = prompt("How long would you like your password to be? \nIt must be between 8 and 128 characters!");
  if (!lengthConfirm) {
    //setting conditions for when users enter non numbers, lengths that are to short or too long, and if they cancel without entering anything.
    alert("No problem! Come back soon!")
    return;
  } else if (lengthConfirm < minLength || lengthConfirm > maxLength) {
    alert("Password must be between 8 and 128 characters!");
    return;
  } else if (isNaN(lengthConfirm)) {
    alert("The length must be a number!")
    return;
  } else {
    alert("Great!");
  }
    //setting up the actual booleans to set the pools together
    var upperCase = confirm("Do you want to use Uppercase Letters?")
    var lowerCase = confirm("Do you want to use Lowercase Letters?")
    var numbers = confirm("Do you want to use numbers?")
    var specChara = confirm("Do you want to use Special Symbols?")
      if (upperCase) {
        protoPass = protoPass.concat(upCase);
      }
      if (lowerCase) {
        protoPass = protoPass.concat(lowCase);
      }
      if (numbers) {
        protoPass = protoPass.concat(Num);
      }
      if (specChara) {
        protoPass = protoPass.concat(Symbols);
      } //failsafe incase someone says no to every pool of choices.
      if (protoPass = []){
        alert("You must enter something!")
        return;
      }//to randomize the choices
    for (i = 0; i < lengthConfirm; i++) {
      var random = Math.floor(Math.random() * protoPass.length);
      var randomArray = protoPass[random];
      randomPassword.push(randomArray);
    }
    randomPassword = randomPassword.join('');
    return randomPassword;
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


