import i18Obj from "./translate.js";
const hamburger = document.querySelector(".nav-hamburger");
const hamburgerMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu-item");
const i18Node = document.querySelectorAll("[data-i18]");
const enLang = document.querySelector("#en-lang");
const ruLang = document.querySelector("#ru-lang");
const elementsInvert = document.querySelectorAll("[data-theme");
const themeLink = document.querySelector(".theme-switch");
const themeIcon = document.querySelector(".theme-icon");

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
const portfolioBtns = document.querySelector(".portfolio-btns");
const portfolioBtn = document.querySelectorAll(".portfolio-button");
const portfolioImg = document.querySelectorAll(".portfolio-img");
const changeImage = (event) => {
  if (event.target.dataset.season === "winter") {
    [...portfolioBtn].map((el) => {
      el.classList.remove("active");
    });
    portfolioBtn.item(0).classList.add("active");
    portfolioImg.forEach(
      (img, index) => (img.src = `./assets/winter/${index + 1}.jpg`)
    );
  } else if (event.target.dataset.season === "spring") {
    [...portfolioBtn].map((el) => {
      el.classList.remove("active");
    });
    portfolioBtn.item(1).classList.add("active");
    portfolioImg.forEach(
      (img, index) => (img.src = `./assets/spring/${index + 1}.jpg`)
    );
  } else if (event.target.dataset.season === "summer") {
    [...portfolioBtn].map((el) => {
      el.classList.remove("active");
    });
    portfolioBtn.item(2).classList.add("active");
    portfolioImg.forEach(
      (img, index) => (img.src = `./assets/summer/${index + 1}.jpg`)
    );
  } else if (event.target.dataset.season === "autumn") {
    [...portfolioBtn].map((el) => {
      el.classList.remove("active");
    });
    portfolioBtn.item(3).classList.add("active");
    portfolioImg.forEach(
      (img, index) => (img.src = `./assets/autumn/${index + 1}.jpg`)
    );
  }
};
const getTranslate = (lang) => {
  if (lang === "ru") {
    enLang.classList.remove("lang-active");
    ruLang.classList.add("lang-active");
  } else if (lang === "en") {
    ruLang.classList.remove("lang-active");
    enLang.classList.add("lang-active");
  }
  [...i18Node].map((el) => {
    const transEl = el.dataset.i18;
    el.innerHTML = i18Obj[lang][transEl];
  });
};
const themeSwitch = () => {
  [...elementsInvert].map((el) => {
    el.classList.toggle("light-theme");
  });
  if ([...hamburger.classList].includes("light-theme")) {
    themeIcon.src = "./assets/dark-icon.svg";
  } else {
    themeIcon.src = "./assets/light-icon.svg";
  }
};
enLang.addEventListener("click", () => {
  getTranslate("en");
});
ruLang.addEventListener("click", () => {
  getTranslate("ru");
});
themeLink.addEventListener("click", themeSwitch);
portfolioBtns.addEventListener("click", changeImage);
hamburgerMenu.addEventListener("click", toggleMenu);
hamburger.addEventListener("click", toggleMenu);
