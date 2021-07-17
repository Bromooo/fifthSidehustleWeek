const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  const change =  Math.floor(Math.random() * colors.length);
 

  document.body.style.backgroundColor = colors[change];
  color.textContent = colors[change];
});


