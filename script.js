const toogleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toogleIcon = document.getElementById("toogle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark or Light Images - Using Template strings to cut down on lines of code
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 /50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toogleIcon.children[0].textContent = "Dark Mode"; //.textContent allows to change text securely
  toogleIcon.children[1].classList.replace("fa-sun", "fa-moon"); //replaces sun icon and with moon icon
  imageMode("dark");
}
// Dark Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 /50%)";
  toogleIcon.children[0].textContent = "Light Mode"; //.textContent allows to change text securely
  toogleIcon.children[1].classList.replace("fa-moon", "fa-sun"); //replaces moon icon and with sun icon
  imageMode("light");
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
