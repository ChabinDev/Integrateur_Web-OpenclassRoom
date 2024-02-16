import { apiUrl, apiWorks, token, categoryStorage } from "./parametres.js";


const formAddWorks = document.querySelector("#WorkFormAdd");
const inputFile = document.querySelector("input[type='file']");
const previewImage = document.getElementById("preview-file");
const labelFile = document.querySelector(".importImage");
const titleElement = formAddWorks.querySelector("input[type='text']");
const categoryElement = formAddWorks.querySelector("#select");
const disabled = document.querySelector(".disabledColor");
const paragraphFile = document.querySelector("#WorkFormAdd p");


export const validMessage = document.querySelector(".validMessage");
const errorMessage = document.querySelector(".errorMessage");
const errorValMessage = document.querySelector(".errorValMessage");
const successMessage = document.querySelector(".successMessage");

// fontion pour vérifier la taille du fichier image
function checkFileSize(file) {
  const fileSize = file.size;
  const maxSize = 4 * 1024 * 1024; // 4 Mo

  if ( fileSize > maxSize ) {
    return false;
  }
  return true
}

// Fonction d'ajout d'un nouveu projet
function addWorks() {
  formAddWorks.addEventListener("submit", (e) => {
    e.preventDefault();
   
    // Récupération des Valeurs du formulaire
    const formData = new FormData();
    formData.append("image", inputFile.files[0]);
    formData.append("title", titleElement.value);
    formData.append("category", category.value);

    fetch(apiUrl + apiWorks, {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + token
      },
      body: formData
    },
      )
      .then((res) => {
        if ( !res.ok ) {
          errorValMessage.style.visibility = "visible";
          errorValMessage.style.display = "flex";
          errorValMessage.textContent = "Erreur lors de l'envoi du fichier";
          validMessage.style.display = "none";
          validMessage.style.visibility = "hidden"
          
          setTimeout(() => {
            errorValMessage.style.visibility = "hidden";
            errorValMessage.style.display = "none";
            errorValMessage.textContent = "";
          }, 2000);

        } else {
          validMessage.style.visibility = "visible";
          validMessage.style.display = "flex";
          validMessage.textContent = "Fichier envoyé avec succès.";
          errorValMessage.style.display = "none";
          location.reload();

          setTimeout(() => {
            validMessage.style.visibility = "hidden";
            validMessage.style.display = "none";
            validMessage.textContent = ""; 
            resetFields();
            disabled.style.background = "#A7A7A7";
          }, 2000);
        }
          return res.json();
    })
  });
};



//eventlistener sur les 3 éléments afin de véfifier chaque élement si vide ou rempli
inputFile.addEventListener("input", buttonValid)
titleElement.addEventListener("input", buttonValid);
categoryElement.addEventListener("input", buttonValid);

// Fonction pour si condition vrai pour changer la couleur du bouton valider
function buttonValid() {
  if ( titleElement.value !== "" && 
  category.value !== "" && 
  inputFile.files.length > 0 
  ) {
    // Vérification de la taille de l'image avant le click sur le bouton Valider
    const imageFile = inputFile.files[0];
    if (!checkFileSize(imageFile)) {
      disabled.style.background = "#A7A7A7";
      errorMessage.style.visibility = "visible";
      errorMessage.style.display = "flex";
      errorMessage.textContent = "La taille de l'image ne doit pas dépasser 4 Mo";
      setTimeout(() => {
        resetFields();
      }, 3000);
      return;
    }
    disabled.style.background = "#1D6154";
    successMessage.style.visibility = "visible";
    successMessage.style.display = "flex";
  }
}


//Fonction de prévisualisation de l'image
function prevImg() {

    inputFile.addEventListener("change", () => {
      const file = inputFile.files[0];   
      // Crér un objet FileReader
      const reader = new FileReader();
      // Lire le contenu du fichier sélectionné
      reader.readAsDataURL(file);

      // convertir l'URL de données en chaine Binaire
        reader.onload = function () {
        previewImage.src = reader.result;
        previewImage.style.display = "flex";
        labelFile.style.display = "none";
        paragraphFile.style.display = "none";
      };
  });
}

// Fonction pour réinitialiser les champs de saisie, la sélection et l'image
function resetFields() {
  titleElement.value = "";
  category.value = "";
  inputFile.value = "";
  previewImage.style.display = "none";
  labelFile.style.display = "flex";
  paragraphFile.style.display = "flex";
  errorMessage.textContent = "";
}

if ( categoryStorage ) {
//Création d'un Select avec une valeur par défault à ""
const selectMenu = document.createElement("select");
selectMenu.name = "category";
selectMenu.id = "category";
const defaultMenu = document.createElement("option");
defaultMenu.value = "";
selectMenu.appendChild(defaultMenu);

//Récupération du localstorage pour liste les categories dans le Select
let recupNameCategory = JSON.parse(localStorage.getItem("category"));
recupNameCategory.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.id;
  option.textContent = category.name;
  selectMenu.appendChild(option);
})
// Affichage des options dans le container html
const selectContainer = document.getElementById("select");
selectContainer.appendChild(selectMenu);
}


export {
  prevImg, addWorks,
}
