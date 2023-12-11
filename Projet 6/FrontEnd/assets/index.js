const countriesContainer = document.querySelector(".countries-container");
const btnSort = document.querySelectorAll(".btnSort");
let countriesData = [];
let sortMethod = "maxToMin";

async function fecthCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countriesData = data));

  console.log(countriesData);
  countriesDiplay();
}