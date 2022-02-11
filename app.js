

// const seonhwaCalculator = {
//   add: function( jelly , bean ){
//     return jelly + bean ;
//   },
//   minus: function( jelly , bean ){
//     return jelly - bean ;
//   },
//   multi: function( jelly , bean ){
//     return jelly * bean ;
//   },
//   divide: function( jelly , bean){
//      return jelly / bean ;
//   },
//   powerof: function ( jelly , bean){
//     return jelly**bean ;
//   }
// };

// const result= seonhwaCalculator.add(1,1);








// const age = 96;
// function calKrAge(ageOfForeigner){
//   return ageOfForeigner + 2;
// }

// const krAge = calKrAge(age);








//age calculator!
// const age = parseInt(prompt("How old are you?"));



// if (isNaN(age) || age<0 ){
//   console.log("Please write a real positive number")
// } else if(age < 18){
//   console.log("You are too young")
// } else if(age >= 18 && age<=50 ){
//   console.log("You can drink")
// } else{
//   console.log("You can't drink")
// }


const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(){
  title.style.color="pink";
}

function handleMouseEnter(){
  title.innerText = "Mouse is here!";
}

function handleMouseleave(){
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseleave);

function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize",handleWindowResize);