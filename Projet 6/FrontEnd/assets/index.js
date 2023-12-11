const GalleriesContainer = document.getElementById("portfolio");
//const btnSort = document.querySelectorAll(".btnSort");
let galleriesData = [];
//let sortMethod = "maxToMin";

async function fetchGalleries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (galleriesData = data));

  console.log(galleriesData);
  galleriesDisplay();
}