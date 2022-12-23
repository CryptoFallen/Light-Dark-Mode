const toogleSwitch = document.querySelector('input[type="checkbox"]');

// Switch These Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Event Listener
toogleSwitch.addEventListener("change", switchTheme);
