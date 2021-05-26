import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import dataRestorant from "../DATA.json";

//Untuk tombol menu
const menuTombol = document.querySelector("#menu-tombol");
const navUl = document.querySelector("nav ul");
const mainElement = document.querySelector("main");
const headerEement = document.querySelector(".header");

menuTombol.addEventListener("click", (event) => {
  navUl.classList.toggle("open-menu");
  event.stopProagation();
});

mainElement.addEventListener("click", (event) => {
  navUl.classList.remove("open-menu");
  event.stopPropagation();
});

headerEement.addEventListener("click", (event) => {
  navUl.classList.remove("open-menu");
  event.stopPropagation();
});
// Maping data restaurant
const listPost = document.querySelector(".post");
let listRest = "";

dataRestorant.restaurants.forEach((dataRest) => {
  listRest += `
  <article tabindex="0" id="post" class="post-item">
  <h2 class="post-item-title">${dataRest.city}</h2>
  <img src=${dataRest.pictureId} width="450" alt="${dataRest.name}" />
  <div class="post-item-description">
    <h4>Rating: ${dataRest.rating}</h4>
    <h3>${dataRest.name}</h3>
    <p>${dataRest.description}</p>
  </div>
</article>
  `;
  listPost.innerHTML = listRest;
});
