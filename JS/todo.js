const missionForm = document.querySelector("#todo-form");
const todoBox = document.querySelector("#todobox");
const missionInput = missionForm.querySelector("input");

let toDos = [];

const TODO_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.classList.add("item")
    button.classList.add("deletebutton")
    li.id = newToDo.id;
    span.innerText = newToDo.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    todoBox.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = missionInput.value;
    missionInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

missionForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
    toDos = parsedToDos;        
};
