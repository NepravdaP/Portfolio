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
const portfolioBtns = document.querySelector(".portfolio-btns");
const portfolioImg = document.querySelectorAll(".portfolio-img");
const changeImage = (event) => {
  if (event.target.dataset.season === "winter") {
    portfolioImg.forEach(
      (img, index) => (img.src = `./assets/winter/${index + 1}.jpg`)
    );
  } else if (event.target.dataset.season === "spring") {
    portfolioImg.forEach(
      (img, index) => (img.src = `./assets/spring/${index + 1}.jpg`)
    );
  } else if (event.target.dataset.season === "summer") {
    portfolioImg.forEach(
      (img, index) => (img.src = `./assets/summer/${index + 1}.jpg`)
    );
  } else if (event.target.dataset.season === "autumn") {
    portfolioImg.forEach(
      (img, index) => (img.src = `./assets/autumn/${index + 1}.jpg`)
    );
  }
};
portfolioBtns.addEventListener("click", changeImage);
hamburgerMenu.addEventListener("click", toggleMenu);
hamburger.addEventListener("click", toggleMenu);
