const toDoForm = document.querySelector("#todo-form");
const toDOList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input")

const TODOS_KEY = "todos";

let toDos= [];


function savedToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo (pepsi){
  const subject = pepsi.target.parentElement;
  console.log(subject.id);
  subject.remove();
}


function paintToDo(newToDo){
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button =document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDOList.appendChild(li);
}


function handleToDoSubmit(coke){
  coke.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObj = {
    text:newToDo,
    id: Date.now(),
  };

  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  savedToDos();
}




toDoForm.addEventListener("submit",handleToDoSubmit);





const getToDos = localStorage.getItem(TODOS_KEY);

if(getToDos !== null){
   const parsedToDos = JSON.parse(getToDos);
   toDos= parsedToDos;
   parsedToDos.forEach(paintToDo) ;
}




