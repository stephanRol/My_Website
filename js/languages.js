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
    skills: {
      title: "Skills",
    },
    works: {
      title: "Works",
      text: "See Code:",
    },
    webpageAge: {
      title: "Webpage Age",
      years: "Years",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    contact: {
      title: "Contact",
      text: "2021 MyWebpage Created by  ",
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
    skills: {
      title: "Kenntnisse",
    },
    works: {
      title: "Projekte",
      text: "Siehe Code:",
    },
    webpageAge: {
      title: "Webpage Alter",
      years: "Jahre",
      days: "Tage",
      hours: "Stunde",
      minutes: "Minuten",
      seconds: "Sekunden",
    },
    contact: {
      title: "Kontakt",
      text: "2021 MyWebpage Erstellt von  ",
    },
  },
  ES: {
    navbar: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Conocimientos",
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
    skills: {
      title: "Conocimientos",
    },
    works: {
      title: "Proyectos",
      text: "Ver código:",
    },
    webpageAge: {
      title: "Edad de la Webpage",
      years: "Años",
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
    },
    contact: {
      title: "Contacto",
      text: "2021 MyWebpage Creada por  ",
    },
  },
};

//Select Input
let languageSelector = document.querySelector("#language-selector");

//Navbar
let navHome = document.querySelectorAll(".nav-home");
let navAbout = document.querySelectorAll(".nav-about");
let navSkills = document.querySelectorAll(".nav-skills");
let navWork = document.querySelectorAll(".nav-work");
let navContact = document.querySelectorAll(".nav-contact");
//Title
let titleH1 = document.querySelector(".title-1");
let titleBig = document.querySelector(".paragraph-welcome");
let titleBigResponsive = document.querySelector(
  ".paragraph-welcome-responsive"
);
//About
let titleAbout = document.querySelector(".description h2");
let textAbout = document.querySelector(".description p");
//Skills
let titleSkills = document.querySelector(".skills-container h2");
//Works
let titleWorks = document.querySelector(".work-container h2");
let textWorks = document.querySelectorAll(".seeCode");
//Webpage Age
let titleWebpageAge = document.querySelector(".webpage-age-container h2");
let yearsWebpageAge = document.querySelector(".textYears");
let daysWebpageAge = document.querySelector(".textDays");
let hoursWebpageAge = document.querySelector(".textHours");
let minutesWebpageAge = document.querySelector(".textMinutes");
let secondsWebpageAge = document.querySelector(".textSeconds");
//Contact
let titleContact = document.querySelector(".contact-container h2");
let textContact = document.querySelector("#author");

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
  navHome.forEach((element) => {
    element.innerHTML = LAN.navbar.home;
  });
  navAbout.forEach((element) => {
    element.innerHTML = LAN.navbar.about;
  });
  navSkills.forEach((element) => {
    element.innerHTML = LAN.navbar.skills;
  });
  navWork.forEach((element) => {
    element.innerHTML = LAN.navbar.works;
  });
  navContact.forEach((element) => {
    element.innerHTML = LAN.navbar.contact;
  });

  //Changing texts from Home
  titleH1.innerHTML = LAN.home.titleH1;
  titleBig.innerHTML = LAN.home.titleBig;
  titleBigResponsive.innerHTML = LAN.home.titleBig;

  //Changing texts from About
  titleAbout.innerHTML = LAN.about.title;
  textAbout.innerHTML = LAN.about.text;

  //Changing texts from Skills
  titleSkills.innerHTML = LAN.skills.title;

  //Changing texts from Works
  titleWorks.innerHTML = LAN.works.title;
  textWorks.forEach((element) => {
    element.innerHTML = LAN.works.text;
  });

  //Changing texts from Webpage Age
  titleWebpageAge.innerHTML = LAN.webpageAge.title;
  yearsWebpageAge.innerHTML = LAN.webpageAge.years;
  daysWebpageAge.innerHTML = LAN.webpageAge.days;
  hoursWebpageAge.innerHTML = LAN.webpageAge.hours;
  minutesWebpageAge.innerHTML = LAN.webpageAge.minutes;
  secondsWebpageAge.innerHTML = LAN.webpageAge.seconds;

  //Changing texts from Contact
  titleContact.innerHTML = LAN.contact.title;
  textContact.innerHTML = LAN.contact.text;
};

//EVENT
languageSelector.addEventListener("change", chooseLanguage);
