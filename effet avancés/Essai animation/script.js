let btn = document.querySelector("button");

btn.addEventListener("click", function() {
  document.querySelector(".img2").classList.toggle("disparition");
});


document.getElementById("btn-score").addEventListener("click", function() {
  document.querySelector(".score").classList.toggle("result");
});