const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY,userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(userName);
}




const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(lovely){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `hello ${lovely}`;
}



if (savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}

