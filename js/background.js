const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"]
const chosenImage = images[Math.floor(Math.random() * images.length)]
const bgimage = document.createElement("img");

const body = document.querySelector("body")


bgimage.src= `img/${chosenImage}`;
document.body.appendChild(bgimage);

// document.body.style.backgroundImage = "url('img_tree.png')";
body.style.backgroundImage ="";

console.log(chosenImage)
console.log(bgimage.src)


function size(){
  bgimage.classList.add("imgsize")
}

size();