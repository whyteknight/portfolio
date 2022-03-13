// Small Nav selections

const navMenu = document.querySelector("#nav-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

navMenu.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close nav menu when a link is clicked

// Select Nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);  

// Scroll to top function
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
