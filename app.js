const navtog = document.querySelector("#check");
const nav = document.querySelector("ul");
const searchbar = document.querySelector("#searchbar");

const search = document.querySelector("#search");

navtog.addEventListener("click", function () {
  nav.classList.toggle("show");
});

nav.addEventListener("click", function () {
  this.classList.remove("show");
});

searchbar.addEventListener("click", function () {
  console.log("click");
  search.classList.toggle("d-none");
});
