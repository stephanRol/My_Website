const header = document.querySelector("header");
const navbar = document.querySelector("nav");
const about = document.querySelector(".about");
const work = document.querySelector(".work");
const workContainer = document.querySelector(".work-container");
const webpageAgeContainer = document.querySelector(".webpage-age-container");
const contactContainer = document.querySelector(".contact-container");
const imgHome = document.querySelector(".img-home");
const imgSkills = document.querySelector(".skills");
const skillsContainer = document.querySelector(".skills-container");
const underConstruction = document.querySelector(".under-construction");
const imageAbout = document.querySelector(".image");
const descriptionAbout = document.querySelector(".description");

const animations = () => {
  let scroll = window.pageYOffset;

  //Heights
  let headerHeight = header.offsetHeight;
  let aboutHeight = about.offsetHeight;
  let skillsHeight = imgSkills.offsetHeight;
  let workHeight = work.offsetHeight;

  //Parallax Effect
  imgHome.style.transform = `translateY(${scroll * -0.5}px)`;
  imgSkills.style.backgroundPosition = `center top ${
    ((scroll - skillsHeight - 900) / 3.5) * -0.8
  }px`;

  //Header scroll reveal
  if (scroll > headerHeight / 2) {
    imageAbout.style.animation = `scroll-reveal 1s ease-in forwards`;
    descriptionAbout.style.animation = `scroll-reveal 1s ease-in forwards`;
  }
  //About scroll reveal
  if (scroll > headerHeight + aboutHeight / 2) {
    skillsContainer.style.animation = `scroll-reveal 1s ease-in forwards`;
  }
  //Works scroll reveal
  if (scroll > headerHeight + aboutHeight + skillsHeight / 2) {
    workContainer.style.animation = `scroll-reveal 1s ease-in forwards`;
  }
  //Webpage Age scroll reveal
  if (scroll > headerHeight + aboutHeight + skillsHeight + workHeight / 3) {
    webpageAgeContainer.style.animation = `scroll-reveal 1s ease-in forwards`;
  }
  //Contact Age scroll reveal
  if (scroll > headerHeight + aboutHeight + skillsHeight + workHeight) {
    contactContainer.style.animation = `scroll-reveal 1s ease-in forwards`;
  }

  //Navbar scroll reveal
  if (scroll > 1000) {
    navbar.style.position = "fixed";
    navbar.style.backgroundColor = "#050505";
  } else if (scroll === 0) {
    navbar.style.position = "absolute";
    navbar.style.backgroundColor = "transparent";
  }
};

//Events
window.addEventListener("scroll", animations);
underConstruction.addEventListener("click", () => {
  alert("This project is under construction, there's no Website yet.");
});
