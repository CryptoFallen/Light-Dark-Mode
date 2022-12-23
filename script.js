const toogleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toogleIcon = document.getElementById("toogle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 /50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toogleIcon.children[0].textContent = "Dark Mode"; //.textContent allows to change text securely
  toogleIcon.children[1].classList.remove("fa-sun"); //removes sun icon and replaces with moon icon
  toogleIcon.children[1].classList.add("fa-moon");
  image1.src = "img/undraw_proud_coder_dark.svg"; //changing image
  image2.src = "img/undraw_feeling_proud_dark.svg";
  image3.src = "img/undraw_conceptual_idea_dark.svg";
}
// Dark Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 /50%)";
  toogleIcon.children[0].textContent = "Light Mode"; //.textContent allows to change text securely
  toogleIcon.children[1].classList.remove("fa-moon");
  toogleIcon.children[1].classList.add("fa-sun"); //removes sun icon and replaces with moon icon
  image1.src = "img/undraw_proud_coder_light.svg"; //changing image
  image2.src = "img/undraw_feeling_proud_light.svg";
  image3.src = "img/undraw_conceptual_idea_light.svg";
}
// Switch These Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode(); //When toogle goes to dark mode
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
}

// Event Listener
toogleSwitch.addEventListener("change", switchTheme);
