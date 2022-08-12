const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const toDo = document.querySelector(".todobox");
const greeting = document.querySelector("#greeting");
const greetingMent = document.querySelector("#greeting h1");
const logout = document.querySelector(".firstbox button")

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function onLoginSubmit(info){
    info.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreeting();
}

function onLogOut(event){
    event.preventDefault();
    toDo.classList.add(HIDDEN_CLASS);
    greeting.classList.add(HIDDEN_CLASS);
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem("todos");
    loginForm.classList.remove(HIDDEN_CLASS);
    loginInput.value = "";
    removeAllChildNodes(toDoList);
    toDos=[];
}
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


function paintGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);

    greetingMent.innerText = `Welcome ${username}, Prepare for the take off!`;
    greeting.classList.remove(HIDDEN_CLASS);
    toDo.classList.remove(HIDDEN_CLASS);
}


loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreetings();
}

logout.addEventListener("click",onLogOut);