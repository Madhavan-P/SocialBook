var settingMenu = document.querySelector(".setting-menu");
var toggleMode = document.getElementById("dark-btn");

function settingMenuToggle() {
  settingMenu.classList.toggle("setting-menu-height");
}
function ToggleMode() {
  toggleMode.classList.toggle("dark-mode-on");
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

if (localStorage.getItem("theme") == "light") {
  toggleMode.classList.remove("dark-mode-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  toggleMode.classList.add("dark-mode-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
