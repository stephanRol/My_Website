"use strict";

function mediaQuery(minWidthValue) {
  let mediaQueryAnswer = window.matchMedia(`(min-width: ${minWidthValue}em`);
  return mediaQueryAnswer;
}

//Skills
let titleSkillsSpanish = document.querySelector(".skills-container h2");

//Select Input
let langSelector = document.querySelector("#language-selector");
let paragraphWelcome = document.querySelector(".paragraph-welcome");

const chooseLang = () => {
  //Select a language
  if (langSelector.value === "EN") {
    //1008px
    if (mediaQuery(63).matches) {
      paragraphWelcome.style.fontSize = "clamp(2rem, calc(2rem + 8vw), 12rem)";
    } else {
      //800px
      if (mediaQuery(50).matches) {
        paragraphWelcome.style.fontSize =
          "clamp(2rem, calc(2rem + 8vw), 5.5rem)";
      } else {
        paragraphWelcome.style.fontSize =
          "clamp(2rem, calc(2rem + 8vw), 4.5rem)";
      }
    }
  }
  if (langSelector.value === "DE") {
    // 1520px
    if (mediaQuery(95).matches) {
      paragraphWelcome.style.fontSize = "clamp(2rem, calc(2rem + 8vw), 8rem)";
    } else {
      // 1216px
      if (mediaQuery(76).matches) {
        paragraphWelcome.style.fontSize =
          "clamp(2rem, calc(2rem + 8vw), 6.5rem)";
      } else {
        // 864px
        if (mediaQuery(54).matches) {
          paragraphWelcome.style.fontSize =
            "clamp(2rem, calc(2rem + 8vw), 4.5rem)";
        } else {
          paragraphWelcome.style.fontSize =
            "clamp(2rem, calc(2rem + 8vw), 3.5rem)";
        }
      }
    }
  }
  if (langSelector.value === "ES") {
    //320px
    if (mediaQuery(20).matches) {
      titleSkillsSpanish.style.fontSize = "4rem";
    } else {
      titleSkillsSpanish.style.fontSize = "3rem";
    }

    // 1520px
    if (mediaQuery(95).matches) {
      paragraphWelcome.style.fontSize = "clamp(2rem, calc(2rem + 8vw), 10rem)";
    } else {
      // 1328px
      if (mediaQuery(83).matches) {
        paragraphWelcome.style.fontSize =
          "clamp(2rem, calc(2rem + 8vw), 8.5rem)";
      } else {
        // 1040px
        if (mediaQuery(65).matches) {
          paragraphWelcome.style.fontSize =
            "clamp(2rem, calc(2rem + 8vw), 6.5rem)";
        } else {
          paragraphWelcome.style.fontSize =
            "clamp(2rem, calc(2rem + 8vw), 4.5rem)";
        }
      }
    }
  }
};

//EVENT
languageSelector.addEventListener("change", chooseLang);
window.addEventListener("resize", chooseLang);
