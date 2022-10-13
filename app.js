import { fetchBasketBall, fetchFootBall, fetchPlayers } from "./searchTypes.js";

const dropMenu = document.querySelector(".dropdown-menu");
const dropBtn = document.querySelector(".drop-btn");
const nav = document.querySelector(".nav");
const form = document.querySelector(".search-form");
const search = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const btnBoxBtn = [...document.querySelectorAll(".btn-box-btn")];
const basketBallBtn = document.querySelector(".basketball-link");
const basketBallInput = document.querySelector(".basketball-input");
const basketBallForm = document.querySelector(".basketball-form");
const footBallBtn = document.querySelector(".football-link");
const footBallInput = document.querySelector(".football-input");
const footBallForm = document.querySelector(".football-form");
const allBtn = document.querySelector(".all-link");

dropBtn.addEventListener("click", () => {
  dropMenu.classList.toggle("dropdown-active");
});

searchBtn.addEventListener("click", () => {
  search.classList.add("search-input-active");
  form.classList.add("search-form-active");
  searchBtn.classList.add("white");
  btnBoxBtn.forEach((btn) => {
    btn.classList.add("btn-box-active");
  });
});

// FORM SWITCH

basketBallBtn.addEventListener("click", () => {
  form.classList.add("hidden");
  footBallForm.classList.add("hidden");
  basketBallForm.classList.remove("hidden");
});

footBallBtn.addEventListener("click", () => {
  form.classList.add("hidden");
  basketBallForm.classList.add("hidden");
  footBallForm.classList.remove("hidden");
});

allBtn.addEventListener("click", () => {
  form.classList.remove("hidden");
  basketBallForm.classList.add("hidden");
  footBallForm.classList.add("hidden");
});

// FORM SUBMIT FUNCTIONALITY

basketBallForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = basketBallInput.value;
  fetchBasketBall(value);
  nav.classList.add("nav-active");
});

footBallForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = footBallInput.value;
  if (value === "") {
    alert("Can't leave value blank!");
    return;
  }
  fetchFootBall(value);
  nav.classList.add("nav-active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = search.value;
  fetchPlayers(value);
  search.value = "";
  nav.classList.add("nav-active");
});
