"use strict";

let calculateTime = () => {
  let years = document.querySelector(".years");
  let days = document.querySelector(".days");
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");

  let dateStart = new Date(2021, 10, 5);
  let dateNow = new Date();

  let diff = dateNow.getTime() - dateStart.getTime();

  let secondsCount = Math.floor(diff / 1000) % 60;
  let minutesCount = Math.floor(diff / 1000 / 60) % 60;
  let hoursCount = Math.floor(diff / 1000 / 60 / 60) % 24;
  let daysCount = Math.floor(diff / 1000 / 60 / 60 / 24) % 365;
  let yearsCount = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);

  years.innerHTML = yearsCount.toString().padStart(2, "0");
  days.innerHTML = daysCount.toString().padStart(2, "0");
  hours.innerHTML = hoursCount.toString().padStart(2, "0");
  minutes.innerHTML = minutesCount.toString().padStart(2, "0");
  seconds.innerHTML = secondsCount.toString().padStart(2, "0");
};

setInterval(calculateTime, 1000);
