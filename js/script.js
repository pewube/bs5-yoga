const navLinks = [...document.querySelectorAll(".navbar-collapse .nav-link")];
const aboutImgs = [...document.querySelectorAll("#about img")];
const featuresImgs = [...document.querySelectorAll("#features img")];
const testimonialImgs = [...document.querySelectorAll("#testimonial img")];

window.addEventListener("load", () => {
  aboutImgs.forEach((img) => img.classList.add("hide"));
  featuresImgs.forEach((img) => img.classList.add("hide"));
  testimonialImgs.forEach((img) => img.classList.add("hide"));
});

window.addEventListener("scroll", () => {
  if (navLinks[1].classList.contains("active")) {
    aboutImgs.forEach((img) => img.classList.remove("hide"));
  } else if (navLinks[2].classList.contains("active")) {
    featuresImgs.forEach((img) => img.classList.remove("hide"));
  } else if (navLinks[3].classList.contains("active")) {
    testimonialImgs.forEach((img) => img.classList.remove("hide"));
  }
});
