const navtog = document.querySelector("#check");
const nav = document.querySelector("ul");
const searchbar = document.querySelector("#searchbar");

let havNav = nav.classList.contains("show");
let haveSearch = search.classList.contains("d-none");

navtog.addEventListener("click", function () {
  havNav = nav.classList.contains("show");
  if (havNav) {
    nav.classList.remove("show");
  }
  if (!havNav) {
    nav.classList.add("show");
    search.classList.add("d-none");
  }
});

nav.addEventListener("click", function () {
  this.classList.remove("show");
});

searchbar.addEventListener("click", function () {
  haveSearch = search.classList.contains("d-none");
  if (haveSearch) {
    search.classList.remove("d-none");
    nav.classList.remove("show");
  }
  if (!haveSearch) {
    search.classList.add("d-none");
  }
});
