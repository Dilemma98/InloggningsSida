let h2 = document.createElement("h2");
let root = document.getElementById("root");
let inputForm = document.getElementById("inputForm");
let button = document.createElement("button");
button.textContent = "Logga in";
let p = document.createElement("p");
let p2 = document.createElement("p");

const usernameInput = document.createElement("input");
usernameInput.type = "text";

const userName = "test";
const userPassword = "1234";

const passwordInput = document.createElement("input");
passwordInput.type = "password";

p.innerText ="Användarnamn:";
p.id = "anvNamn";
p2.innerText="Lösenord:";
p2.id = "anvLösen";

h2.innerText = "Varsågod att logga in.";
root.appendChild(h2);
inputForm.appendChild(p);
inputForm.appendChild(usernameInput);
inputForm.appendChild(p2);
inputForm.appendChild(passwordInput);
inputForm.appendChild(button);

button.addEventListener("click", () => {
    let result = usernameInput.value;
    let result2 = passwordInput.value;
    if (result == userName && result2 == userPassword){
     h2.innerHTML ="Välkommen in!"
     inputForm = " ";
    }
})
