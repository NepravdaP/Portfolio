const hamburger = document.querySelector(".nav-hamburger");
const hamburgerMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu-item");
const toggleMenu = () => {
  hamburger.classList.toggle("open");
  hamburgerMenu.classList.toggle("open");

  if ([...hamburger.classList].includes("open")) {
    [...links].map((el) => {
      el.style.display = "block";
    });
  } else {
    [...links].map((el) => {
      el.style.display = "none";
    });
  }
};
hamburgerMenu.addEventListener("click", toggleMenu);
hamburger.addEventListener("click", toggleMenu);
console.log(
  "Score: 100 / 100",
  "\n",
  "- [x] Верстка валидная (10)",
  "\n",
  "- [x] Вёрстка семантическая (20)",
  "\n",
  "- [x]Вёрстка соответствует макету (48)",
  "\n",
  "- [x] Требования к css (12)",
  "\n",
  "- [x] Интерактивность, реализуемая через css (20)"
);
