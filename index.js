// ----------menu icon navbar------
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ----------sroll section active link------
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // ----------sticky navbar------
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // ----------remove menu icon navbar when click navbar links (scroll)------
  menuIcon.classList.remouve("bx-x");
  navbar.classList.remouve("active");
};

// ----------swiper------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// var swiper = new Swiper(".mywiper", {
//   slidesPerView: 1,
//   spaceBetween: 50,
//   loop: true,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextE1: ".swiper-button-next",
//     prevE1: ".swiper-button-prev",
//   },
// });

// ----------dark light mode------
let darkModeIcon = document.querySelector("#darkMode-icon");
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

// ----------scroll Reveal------
scrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

scrollReveal().reveal(".home-content, .heading", { origin: "top" });
scrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
  { origin: "bottom" }
);
scrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
scrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});
