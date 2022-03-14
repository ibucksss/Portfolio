var messageArray = ["Hi, my name is Ian"];
var textPosition = 0;
var speed = 150;

typewriter = () => {
  document.querySelector("#message").innerHTML = messageArray[0].substring(
    0,
    textPosition
  );
  if (textPosition++ != messageArray[0].length) setTimeout(typewriter, speed);
};
window.addEventListener("load", typewriter);
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-link");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navFade 0.5 ease forwards ${index / 7 + 0.3}s`;
    }
    burger.classList.toggle("toggle");
  });
};
navSlide();

const form = document.getElementById("form");
const email = document.getElementById("email");
const message = document.getElementById("form-message");
const error = document.querySelector(".error-text");
const btn = document.querySelector(".form-btn");
form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  if (email.value === "") {
    email.classList.toggle("red");
    email.classList.toggle("email-border");
  } else {
    btn.innerHTML = "Thank you!";
    btn.classList.toggle("green");
    email.classList.remove("red");
    email.classList.toggle("email-border");
  }
});
