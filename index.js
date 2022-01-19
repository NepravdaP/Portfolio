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

portfolioBtns.addEventListener("click", changeImage);
hamburgerMenu.addEventListener("click", toggleMenu);
hamburger.addEventListener("click", toggleMenu);
