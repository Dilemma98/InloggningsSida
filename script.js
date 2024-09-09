let h2 = document.createElement("h2");
let root = document.getElementById("root");
let inputField = document.getElementById("inputField");
let button = document.createElement("button");
button.textContent = "Logga in";
let p = document.createElement("p");
let p2 = document.createElement("p");

let usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.placeholder = "Användarnamn:";

let userName = "test";
let userPassword = "1234";

let passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder ="Lösenord:";

/*const checkUser = localStorage.getItem("username");
if (checkUser){
  h2.innerHTML = "Välkommen in!";
    inputField.removeChild(usernameInput);
    inputField.removeChild(passwordInput);
    inputField.removeChild(p);
    inputField.removeChild(p2);
    button.textContent = "Logga ut";
}*/

h2.innerText = "Varsågod att logga in.";

inputField.appendChild(p);
inputField.appendChild(usernameInput);
inputField.appendChild(p2);
inputField.appendChild(passwordInput);
inputField.appendChild(button);

root.appendChild(inputField);
root.insertBefore(h2, inputField);

//LOGGA IN--------------------------------------------
button.addEventListener("click", () => {
  let result = usernameInput.value;
  let result2 = passwordInput.value;

  if (result == userName && result2 == userPassword) {
    localStorage.setItem("username", userName);
    h2.innerHTML = "Välkommen in!";
    inputField.removeChild(usernameInput);
    inputField.removeChild(passwordInput);
    inputField.removeChild(p);
    inputField.removeChild(p2);
    button.textContent = "Logga ut";

    //LOGGA UT------------------------------------------
    button.addEventListener("click", () => {
      localStorage.clear();
      h2.innerText = "Varsågod att logga in.";
      
      inputField.appendChild(p);
      inputField.appendChild(usernameInput);
      inputField.appendChild(p2);
      inputField.appendChild(passwordInput);
      inputField.appendChild(button);

      root.appendChild(inputField);
      root.insertBefore(h2, inputField);
      usernameInput.value = "";
      passwordInput.value = "";
      button.textContent = "Logga in";
    });

  } else {
    h2.innerHTML = "Användarnamn eller lösenord matchade inte. Försök igen";
    usernameInput.value = "";
    passwordInput.value = "";
  }
});
