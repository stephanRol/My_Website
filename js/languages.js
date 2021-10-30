//Languages Object
let languages = {
  EN: {
    navbar: {
      home: "Home",
      about: "About",
      skills: "Skills",
      works: "Works",
      contact: "Contact",
    },
    home: {
      titleH1: "I'm Stephan",
      titleBig: "Welcome to my Portfolio",
    },
    about: {
      title: "About me",
      text: "Lorem ipsum dolor sit, amet English adipisicing elit. Nisi nihil necessitatibus perspiciatis dolorem quaerat quod fugiat nostrum vero consectetur! Cupiditate quos consequatur iure itaque officia eius beatae autem magnam incidunt aliquid quisquam optio, corporis molestias, dolores, accusamus praesentium.Quaerat quod fugiat nostrum vero consectetur! Cupiditate quos consequatur iure itaque officia eius beatae autem magnam incidunt aliquid quisquam optio, corporis molestias, dolores, accusamus praesentium.",
    },
  },
  DE: {
    navbar: {
      home: "Startseite",
      about: "Ueber mich",
      skills: "Kenntnisse",
      works: "Projekte",
      contact: "Kontakt",
    },
    home: {
      titleH1: "Ich bin Stephan",
      titleBig: "Willkommen in meinem Portfolio",
    },
    about: {
      title: "Ueber Mich",
      text: "Lorem ipsum dolor sit, amet Deutsch adipisicing elit. Nisi nihil necessitatibus perspiciatis dolorem quaerat quod fugiat nostrum vero consectetur! Cupiditate quos consequatur iure itaque officia eius beatae autem magnam incidunt aliquid quisquam optio, corporis molestias, dolores, accusamus praesentium.Quaerat quod fugiat nostrum vero consectetur! Cupiditate quos consequatur iure itaque officia eius beatae autem magnam incidunt aliquid quisquam optio, corporis molestias, dolores, accusamus praesentium.",
    },
  },
  ES: {
    navbar: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      works: "Proyectos",
      contact: "Contacto",
    },
    home: {
      titleH1: "Soy Stephan",
      titleBig: "Bienvenido a mi Portafolio",
    },
    about: {
      title: "Sobre mí",
      text: "Lorem ipsum dolor sit, amet Espanol adipisicing elit. Nisi nihil necessitatibus perspiciatis dolorem quaerat quod fugiat nostrum vero consectetur! Cupiditate quos consequatur iure itaque officia eius beatae autem magnam incidunt aliquid quisquam optio, corporis molestias, dolores, accusamus praesentium.Quaerat quod fugiat nostrum vero consectetur! Cupiditate quos consequatur iure itaque officia eius beatae autem magnam incidunt aliquid quisquam optio, corporis molestias, dolores, accusamus praesentium.",
    },
  },
};

let languageSelector = document.querySelector("#language-selector");

//Navbar
let navHome = document.querySelector("#nav-home");
let navAbout = document.querySelector("#nav-about");
let navSkills = document.querySelector("#nav-skills");
let navWork = document.querySelector("#nav-work");
let navContact = document.querySelector("#nav-contact");
//Title
let titleH1 = document.querySelector(".title-1");
let titleBig = document.querySelector(".paragraph-welcome");
//About
let titleAbout = document.querySelector(".description h2");
let textAbout = document.querySelector(".description p");

//FUNCTION
const chooseLanguage = () => {
  let LAN;

  //Select a language
  if (languageSelector.value === "EN") LAN = languages.EN;
  if (languageSelector.value === "DE") LAN = languages.DE;
  if (languageSelector.value === "ES") LAN = languages.ES;

  //Changing flag from Select
  languageSelector.style.background = `url("../assets/${languageSelector.value}.png") no-repeat scroll 75px 2px`;
  languageSelector.style.backgroundColor = "#e6dfdfc2";

  //Changing text from NAVBAR
  navHome.innerHTML = LAN.navbar.home;
  navAbout.innerHTML = LAN.navbar.about;
  navSkills.innerHTML = LAN.navbar.skills;
  navWork.innerHTML = LAN.navbar.works;
  navContact.innerHTML = LAN.navbar.contact;

  //Changing texts from Home
  titleH1.innerHTML = LAN.home.titleH1;
  titleBig.innerHTML = LAN.home.titleBig;

  //Changing texts from About
  titleAbout.innerHTML = LAN.about.title;
  textAbout.innerHTML = LAN.about.text;
};

//EVENT
languageSelector.addEventListener("change", chooseLanguage);
