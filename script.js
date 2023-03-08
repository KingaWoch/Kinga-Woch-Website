const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    let el = document.getElementById(link.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      menuButton.classList.remove("open");
      bars.classList.remove("fa-xmark");
    }
  });
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    toTop.classList.add("visible");
  } else {
    toTop.classList.remove("visible");
  }
});

// mobile navigation

const menuButton = document.querySelector(".menu-btn");
const bars = document.querySelector(".fa-bars");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  if (menuButton.classList.contains("open")) {
    nav.classList.remove("active");
    menuButton.classList.remove("open");
    bars.classList.remove("fa-xmark");
  } else {
    nav.classList.add("active");
    menuButton.classList.add("open");
    bars.classList.add("fa-xmark");
  }
});
