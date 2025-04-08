"use strict";
const year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
