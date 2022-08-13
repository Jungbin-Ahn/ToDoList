const missionForm = document.querySelector("#todo-form");
const todoBox = document.querySelector("#todobox");
const doneBox = document.querySelector("#donebox");
const missionInput = missionForm.querySelector("input");



let toDos = [];

const TODO_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}
function doneToDo(event){
    console.log("done!")
    
}
function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");

    li.id = newToDo.id;
    span.innerText = newToDo.text;
    button1.innerText = "✅";
    button1.addEventListener("click", doneToDo);
    button2.innerText = "❌";
    button2.addEventListener("click", deleteToDo);
    li.appendChild(button1);
    li.appendChild(span);
    li.appendChild(button2);

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
