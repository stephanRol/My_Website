let menuOpened = false;
let hamburgerMenuICon = document.querySelector(".hamburger");
let hamburgerMenu = document.querySelector(".menuHamburger");
let languageSelectorList = document.querySelector("#language-selector");
let burgerMenuList = document.querySelectorAll(".close");

hamburgerMenuICon.addEventListener("click", () => {
  if (menuOpened) {
    hamburgerMenuICon.classList.remove("is-active");
    hamburgerMenuICon.style.position = "relative";
    hamburgerMenu.style.display = "none";
    languageSelectorList.style.display = "inline";
    menuOpened = false;
  } else {
    hamburgerMenuICon.classList.add("is-active");
    hamburgerMenuICon.style.position = "fixed";
    hamburgerMenu.style.display = "flex";
    languageSelectorList.style.display = "none";
    menuOpened = true;
  }
});

burgerMenuList.forEach((element) => {
  element.addEventListener("click", () => {
    hamburgerMenuICon.classList.remove("is-active");
    hamburgerMenu.style.display = "none";
    hamburgerMenuICon.style.position = "relative";
    languageSelectorList.style.display = "inline";
    menuOpened = false;
  });
});
