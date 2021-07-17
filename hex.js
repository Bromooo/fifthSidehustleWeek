const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  var changeColor = "#";
  for (var i = 0; i < 6; i++) {
    changeColor += hex[change()];
  }
  // console.log(changeColor);

  color.textContent = changeColor;
  document.body.style.backgroundColor = changeColor;
});

function change() {
  return Math.floor(Math.random() * hex.length);
}
