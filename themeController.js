const root = document.documentElement;
root.className = "light";

const themeBtn = document.querySelector(".theme-toggle");

function setTheme() {
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;
  themeBtn.innerHTML = newTheme === "dark" ? "🌑" : "☀️";
}

setTheme();
themeBtn.addEventListener("click", setTheme);
