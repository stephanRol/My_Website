"use strict";

let mediaquery = window.matchMedia("(min-width: 95em)");
let mediaquerySkills = window.matchMedia("(min-width: 20em)");

//Skills
let titleSkillsSpanish = document.querySelector(".skills-container h2");

//Select Input
let langSelector = document.querySelector("#language-selector");
let paragraphWelcome = document.querySelector(".paragraph-welcome");

const chooseLang = () => {
  //Select a language
  if (langSelector.value === "EN") {
    paragraphWelcome.style.fontSize = "clamp(2rem, calc(2rem + 8vw), 12rem)";
  }
  if (langSelector.value === "DE") {
    if (mediaquery.matches) {
      paragraphWelcome.style.fontSize = "clamp(2rem, calc(2rem + 8vw), 8rem)";
    } else {
      paragraphWelcome.style.fontSize = "clamp(2rem, calc(2rem + 8vw), 5.5rem)";
    }
  }
  if (langSelector.value === "ES") {
    if (mediaquerySkills.matches) {
      alert("4rem");
      titleSkillsSpanish.style.fontSize = "4rem";
    } else {
      alert("3rem");
      titleSkillsSpanish.style.fontSize = "3rem";
    }

    if (mediaquery.matches) {
      paragraphWelcome.style.fontSize = "clamp(2rem, calc(2rem + 8vw), 9rem)";
    } else {
      paragraphWelcome.style.fontSize = "clamp(2rem, calc(2rem + 8vw), 5.5rem)";
    }
  }
};

//EVENT
languageSelector.addEventListener("change", chooseLang);
