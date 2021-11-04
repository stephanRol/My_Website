"use strict";

function alfa(param) {
  let text = document.querySelector(param);
  let str = text.textContent;

  text.textContent = "";

  let speed = 100;
  let i = 0;

  //typewriter effect
  let typeWriter = () => {
    if (i < str.length) {
      if (
        param === ".div-up" ||
        param === ".title-1-open" ||
        param === ".title-1-close" ||
        param === ".title-2-open" ||
        param === ".title-2-close" ||
        param === ".div-down"
      ) {
        text.style.color = "#346dc2";
        text.style.color = "#346dc28f";
      }

      text.textContent += str.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };

  if (param === ".div-up") {
    setTimeout(typeWriter, 7000);
  } else if (param === ".title-1-open") {
    setTimeout(typeWriter, 7500);
  } else if (param === ".title-1") {
    setTimeout(typeWriter, 5000);
  } else if (param === ".title-1-close") {
    setTimeout(typeWriter, 9700);
  } else if (param === ".title-2-open") {
    setTimeout(typeWriter, 10500);
  } else if (param === ".title-2") {
    setTimeout(typeWriter, 7500);
  } else if (param === ".title-2-close") {
    setTimeout(typeWriter, 13000);
  } else if (param === ".div-down") {
    setTimeout(typeWriter, 14000);
  }
}

setTimeout(function () {
  alfa(".div-up");
}, 0);
setTimeout(function () {
  alfa(".title-1-open");
}, 0);
setTimeout(function () {
  alfa(".title-1");
}, 0);
setTimeout(function () {
  alfa(".title-1-close");
}, 0);
setTimeout(function () {
  alfa(".title-2-open");
}, 0);
setTimeout(function () {
  alfa(".title-2");
}, 0);
setTimeout(function () {
  alfa(".title-2-close");
}, 0);
setTimeout(function () {
  alfa(".div-down");
}, 0);
