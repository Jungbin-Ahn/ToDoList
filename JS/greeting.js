const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector(".firstbox");
const greetingMent = document.querySelector("#greeting h1");
const toDo = document.querySelector(".secondbox");
const logout = document.querySelector("#greeting button");



const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function onLoginSubmit(info){
    info.preventDefault();
    localStorage.setItem(USERNAME_KEY,loginInput.value);
    paintGreeting();
}

function paintGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    loginForm.classList.add(HIDDEN_CLASS);
    greetingMent.innerText = `Welcome ${username}, Prepare for the Take Off!`;
    greeting.classList.remove(HIDDEN_CLASS);
    toDo.classList.remove(HIDDEN_CLASS);
    bg.style.filter = "brightness(100%)";
    thirdbox.style.filter = "brightness(100%)"

}

function onLogOut(event){
    event.preventDefault();
    toDo.classList.add(HIDDEN_CLASS);
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASS);
    loginForm.classList.remove(HIDDEN_CLASS);
    loginInput.value = "";
    removeAllChildNodes(todoBox);
    toDos=[];
    bg.style.filter = "brightness(20%)";
    thirdbox.style.filter = "brightness(20%)"
}
function removeAllChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
loginForm.addEventListener("submit", onLoginSubmit);

if(localStorage.getItem(USERNAME_KEY) === null){
    greeting.classList.add(HIDDEN_CLASS)
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",onLoginSubmit);
    toDo.classList.add(HIDDEN_CLASS);
}else{
    paintGreeting();
}

logout.addEventListener("click",onLogOut);