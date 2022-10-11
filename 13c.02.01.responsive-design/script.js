"use strict";

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
const mobileNav = document.querySelector(".mobile_nav");
const navLinks = document.querySelector(".mobile_nav_links");
let linksHidden = true;

menuBtn.addEventListener("click", () => {
  if (!menuOpen && linksHidden) {
    menuBtn.classList.add("open");
    navLinks.classList.remove("hidden");
    navLinks.classList.add("visible");
    mobileNav.classList.toggle("hidden");
    menuOpen = true;
    linksHidden = false;
  } else {
    mobileNav.classList.toggle("hidden");
    menuBtn.classList.remove("open");
    navLinks.classList.remove("visible");
    navLinks.classList.add("hidden");
    menuOpen = false;
    linksHidden = true;
  }
});
