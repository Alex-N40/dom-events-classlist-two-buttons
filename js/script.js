/*Switch between dark and light mode with two buttons.*/

var darkModeButton = document.querySelector(".dark-mode");

var body = document.querySelector("body");
darkModeButton.addEventListener("click", function () {
  body.classList.add("dark-palette");
});

var lightModeButton = document.querySelector(".light-mode");
lightModeButton.addEventListener("click", function () {
  body.classList.remove("dark-palette");
});
