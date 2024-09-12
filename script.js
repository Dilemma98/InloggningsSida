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

// Här skapar jag funktionen för den inloggade sidan. 
//Denna kan jag sedan använda i mina olika if-satser
function LoggedIn() {
  localStorage.setItem("username", userName);
  h2.innerHTML = "Välkommen in!";
  inputField.removeChild(usernameInput);
  inputField.removeChild(passwordInput);
  button.textContent = "Logga ut";
  document.body.appendChild(h3);
  loggedIn = true;
}

//Här använder jag min variabel som kollar om användaren redan loggat in. 
//Har den det kallar det på den inloggade sidan.
if (checkUser) {
  LoggedIn();
}

//Här skapar jag funktionen för Logga in knappen. 
//I denna finns olika if och else satser för de olika utfallen
button.addEventListener("click", () => {
  if (!loggedIn) {
    //Om användaren inte är inloggad sker if-en nedanför
    let userNameResult = usernameInput.value;
    let userPasswordResult = passwordInput.value;

    //Här är villkoret att om användarnamn och lösenord stämmer med det hårkodade 
    //användarnamn och lösenord så kallar det på funktionen för den inloggade sidan
    if (userNameResult == userName && userPasswordResult == userPassword) {
      LoggedIn();
    } else {
      h2.innerHTML = "Användarnamn eller lösenord matchade inte. Försök igen";
      usernameInput.value = "";
      passwordInput.value = "";
    }
  } else {
    // Här är koden för vad som händer om Logga ut knappen trycks på.
    //Då rensas localStorage och användaren "skickas" tillbaka till
    //inloggningssidan.
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