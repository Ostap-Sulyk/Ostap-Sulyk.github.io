// buttons
const aboutBtn = document.getElementById("learn-more-btn");
const projectBtn = document.getElementById("projects-btn");
const navAboutBtn = document.querySelector(".nav-bar ul li:nth-child(1) a");
const navWorkBtn = document.querySelector(".nav-bar ul li:nth-child(2) a");

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// sections
const aboutSection = document.querySelector(".about");
const projectsSection = document.querySelector(".projects-section");

aboutBtn.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

projectBtn.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});

navAboutBtn.addEventListener("click", (event) => {
  event.preventDefault(); // prevent default link behavior
  aboutSection.scrollIntoView({ behavior: "smooth" });
  navBar.classList.remove("active"); // hide navigation bar
  heroContainer.classList.remove("slide-down"); // move hero section back up
});

navWorkBtn.addEventListener("click", (event) => {
  event.preventDefault(); // prevent default link behavior
  projectsSection.scrollIntoView({ behavior: "smooth" });
  navBar.classList.remove("active"); // hide navigation bar
  heroContainer.classList.remove("slide-down"); // move hero section back up
});

const hamburger = document.querySelector(".hamburger");
const heroContainer = document.querySelector(".hero-container");

hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
  heroContainer.classList.toggle("slide-down");
};

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      reverseDirection: false,
    },
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: {
      invert: false,
    },
    speed: 500,
  });
});
