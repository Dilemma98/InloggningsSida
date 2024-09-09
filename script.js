let h2 = document.createElement("h2");
let root = document.getElementById("root");
let inputForm = document.getElementById("inputForm");
let button = document.createElement("button");
button.textContent = "Logga in";
let p = document.createElement("p");
let p2 = document.createElement("p");

const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.id = "username";

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.id = "password";


p.innerText ="Användarnamn:";
p.id = "anvNamn";
p2.innerText="Lösenord:";
p2.id = "anvLösen";

h2.innerText = "Varsågod att logga in.";
inputForm.appendChild(h2);
inputForm.appendChild(p);
inputForm.appendChild(usernameInput);
inputForm.appendChild(p2);
inputForm.appendChild(passwordInput);
inputForm.appendChild(button);


