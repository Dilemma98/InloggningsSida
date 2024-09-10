let h2 = document.createElement("h2");
let root = document.getElementById("root");
let inputField = document.getElementById("inputField");
let button = document.createElement("button");
button.textContent = "Logga in";
const h3 = document.createElement("h3");
h3.innerText = "Välkomna Janne och Asaf!";
let usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.placeholder = "Användarnamn:";
let userName = "test";
let userPassword = "1234";
let passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Lösenord:";
let loggedIn = false;
const checkUser = localStorage.getItem("username");

h2.innerText = "Varsågod att logga in.";

inputField.appendChild(usernameInput);
inputField.appendChild(passwordInput);
inputField.appendChild(button);

root.appendChild(inputField);
root.insertBefore(h2, inputField);

function LoggedIn() {
  localStorage.setItem("username", userName);
  h2.innerHTML = "Välkommen in!";
  inputField.removeChild(usernameInput);
  inputField.removeChild(passwordInput);
  button.textContent = "Logga ut";
  document.body.appendChild(h3);
  loggedIn = true;
}

if (checkUser) {
  LoggedIn();
}

button.addEventListener("click", () => {
  if (!loggedIn) {
    // Logga in
    let userNameResult = usernameInput.value;
    let userPasswordResult = passwordInput.value;

    if (userNameResult == userName && userPasswordResult == userPassword) {
      LoggedIn();
    } else {
      h2.innerHTML = "Användarnamn eller lösenord matchade inte. Försök igen";
      usernameInput.value = "";
      passwordInput.value = "";
    }
  } else {
    // Logga ut
    localStorage.clear();
    document.body.removeChild(h3);
    h2.innerText = "Varsågod att logga in.";

    inputField.appendChild(usernameInput);
    inputField.appendChild(passwordInput);
    inputField.appendChild(button);
    button.textContent = "Logga in";
    loggedIn = false;
    usernameInput.value = "";
    passwordInput.value = "";
  }
});