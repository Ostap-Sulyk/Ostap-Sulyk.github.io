const scrollBtn = document.getElementById("learn-more-btn");
const about = document.getElementById("about");

scrollBtn.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

const hamburger = document.querySelector(".hamburger");
const heroContainer = document.querySelector(".hero-container");

hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
  heroContainer.classList.toggle("slide-down");
};
