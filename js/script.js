const toggleBtn = document.getElementById("toggle-dark");
const icon = toggleBtn.querySelector("i");
const spanText = toggleBtn.querySelector("span");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    spanText.textContent = "Modo Claro";
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    spanText.textContent = "Modo Escuro";
  }
});
