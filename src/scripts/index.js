import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import dataRestorant from "../DATA.json";

//Untuk tombol menu
const menuTombol = document.querySelector(".menu-tombol");
const navUl = document.querySelector("nav ul");

menuTombol.addEventListener("click", function () {
  navUl.classList.toggle("open-menu");
});

//maping data restaurant
dataRestorant.restaurants.forEach((dataRest) => {
  const listPost = document.querySelector(".post");

  let listData = "";

  listPost += `


  `;
});
