function isValidName(event) {
  var inputField = document.getElementById("name");
  var div = document.getElementById("nameError");

  if (inputField.value == "") {
    inputField.style.borderColor = "red";
    div.innerText = "Name is required";
    return false;
  } else {
    inputField.style.borderColor = "#ccc";
    div.innerText = "";
    return true;
  }
}
function isValidPass(event) {
  var inputField = document.getElementById("password");
  var div = document.getElementById("passwordError");

  if (inputField.value.length < 8) {
    inputField.style.borderColor = "red";
    div.innerText = "password shold be 8 Charcters at least";
    return false;
  } else {
    inputField.style.borderColor = "#ccc";
    div.innerText = "";
    return true;
  }
}

function isValidEmail(event) {
  var inputField = document.getElementById("email");
  var div = document.getElementById("emailError");

  if (inputField.value.search(/[a-zA-Z0-9_.]+@[a-zA-Z]+.com/) == -1) {
    inputField.style.borderColor = "red";
    div.innerText = "invalid email";
    return false;
  } else {
    inputField.style.borderColor = "#ccc";
    div.innerText = "";
    return true;
  }
}
function validate() {
  if (isValidName() && isValidPass() && isValidEmail())
    alert("you comments have been uploaded to the server");
  else alert("invalid input");
}
