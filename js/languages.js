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
      text: "My name is Stephan and I am an electrical engineer graduated from the Universidad de la Frontera, in Temuco, Chile, with a brief work experience in Santiago de Chile. I am currently living in Germany and in the past I worked in the area of automation of industries, specifically automation in intralogistics based on the development of industry 4.0, in the position of PLC programmer.<br><br>In the year 2020 I decided to change the area and enter the wonderful world of computer programming, so I started a training of 'Fullstack developer' for a duration of 6 months, in the training center Alfatraining in Hamburg, Germany. At the end of the training I decided to go deeper into frontend development, learning various technologies. Currently I am proficient in HTML5, CSS, JavaScript, React, TypeScript, Sass, Bootstrap, Node.js and Git.<br><br>My university degree has been validated and recognized by the Baden-Wurttemberg Chamber of Engineers in Germany and I have a certified C1 level in German from the Goethe Institut. Furthermore I have good knowledge of English.",
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
      text: "Mein Name ist Stephan. Ich habe mein Studium des Elektroingenieurwesens an der Universidad de la Frontera in Temuco, Chile, abgeschlossen und kurzzeitig als Elektroingeniuer in Santiago de Chile gearbeitet. Derzeit lebe ich in Deutschland und habe in der Vergangenheit im Bereich der industriellen Automatisierung, inbesondere in der Intralogistik-Automatisierung auf Basis der Entwicklung von Industrie 4.0, als SPS-Programmierer gearbeitet.<br><br>Im Jahr 2020 entschied ich mich, mein Fachgebiet zu wechseln und in die wunderbare Welt der Computerprogrammierung einzutauchen. Ich begann eine 6-monatige Ausbildung zum ???Fullstack Developer??? im Alfatraining Schulungszentrum in Hamburg. Am Ende der Ausbildung beschloss ich, mich intensiver mit der Frontend-Entwicklung zu befassen und verschiedene Technologien zu erlernen. Derzeit beherrsche ich HTML5, CSS, JavaScript, React, TypeScript, Sass, Bootstrap, Node.js und Git.<br><br>Mein Hochschulabschluss wurde von der Ingenieurkammer Baden-Wuerttemberg in Deutschland validiert und anerkannt, und ich verfuege ueber ein vom Goethe-Institut bescheinigtes C1-Niveau in Deutsch. Au??erdem verfuege ich ueber gute Englischkenntnisse.",
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
      about: "Sobre m??",
      skills: "Conocimientos",
      works: "Proyectos",
      contact: "Contacto",
    },
    home: {
      titleH1: "Soy Stephan",
      titleBig: "Bienvenido a mi Portafolio",
    },
    about: {
      title: "Sobre m??",
      text: `Mi nombre es Stephan y soy ingeniero el??ctrico titulado de la Universidad de la Frontera, en Temuco, Chile, con breve paso laboral en Santiago de Chile. Actualmente me encuentro viviendo en Alemania y en el pasado trabaj?? en el ??rea de automatizaci??n de industrias, espec??ficamente automatizaci??n en intralogistica en base al desarrollo de la industria 4.0, en el puesto de programador de PLC's. <br><br>
      En el a??o 2020 tom?? la decisi??n de cambiar de ??rea y adentrarme al maravilloso mundo de la programaci??n inform??tica, por lo que comenc?? una capacitaci??n de ???desarrollador Fullstack??? de una duraci??n de 6 meses, en el centro de formaci??n continua Alfatraining en Hamburg, Alemania. Al finalizar la capacitacion he decidido profundizar m??s en el desarrollo Frontend, aprendiendo variadas tecnolog??as. Actualmente tengo conocimiento en las tecnolog??as: HTML5, CSS, JavaScript, React, TypeScript, Sass, Bootstrap, Node.js y Git.
      <br><br>Mi titulo universitario ha sido convalidado y reconocido por la camara de ingenieros de Baden-W??rttemberg en Alemania y poseo un nivel C1 certificado en Alem??n de el Goethe Institut. Adem??s poseo buenos conocimientos en ingles.`,
    },
    skills: {
      title: "Conocimientos",
    },
    works: {
      title: "Proyectos",
      text: "Ver c??digo:",
    },
    webpageAge: {
      title: "Edad de la Webpage",
      years: "A??os",
      days: "D??as",
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
  languageSelector.style.background = `url("./assets/${languageSelector.value}.png") no-repeat scroll 75px 2px`;
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
