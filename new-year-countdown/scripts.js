const MINUTE = 60;
const HOUR = 60 * 60;
const DAY = 24 * 60 * 60;

let nextYearEl = document.querySelector("#next-year");
let daysEl = document.querySelector("#days > .value");
let hoursEl = document.querySelector("#hours > .value");
let minutesEl = document.querySelector("#minutes > .value");
let secondsEl = document.querySelector("#seconds > .value");

setInterval(() => {
  let current = new Date();
  let currentYear = current.getFullYear();
  let newYear = Date.parse(`${currentYear + 1}-01-01 00:00:00`);
  let gap = (newYear - current.getTime()) / 1000;

  let remainDays = Math.floor(gap / DAY);
  gap -= remainDays * DAY;
  let remainHours = Math.floor(gap / HOUR);
  gap -= remainHours * HOUR;
  let remainMinutes = Math.floor(gap / MINUTE);
  gap -= remainMinutes * MINUTE;
  let remainSeconds = Math.round(gap);

  nextYearEl.textContent = currentYear + 1;
  daysEl.textContent = remainDays.toString().padStart(3, '0');
  hoursEl.textContent = remainHours.toString().padStart(2, '0');
  minutesEl.textContent = remainMinutes.toString().padStart(2, '0');
  secondsEl.textContent = remainSeconds.toString().padStart(2, '0');
}, 200);
