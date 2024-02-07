import { apiUrl, apiWorks, galleriesContainer, filterBtn, apiCategories, token } from "./parametres.js";

const galleryModal = document.querySelector(".modalGallery");

//connexion à la base de Données Works
async function worksConnect() {
    const connect = await fetch(apiUrl + apiWorks);
    return connect.json();
}

//connexion à la base de Données Category
async function connectCategory() {
    const requete = await fetch( apiUrl + apiCategories);
    return requete.json();
}
    
//Fonction pour balayer les works
export async function displayConnect() {
        galleriesContainer.innerHTML = "";
            worksConnect().then((dataW) => {
            dataW.forEach((work) => {
            createGallery(work);
            createModalWork(work);

    //Enregistrement dans le Local storage
    localStorage.setItem("works", JSON.stringify(dataW));
        });
    });
}

// function pour balayer les catégories
export async function createAllButton() {
        filterBtn.innerHTML = "";
        connectCategory().then((dataC) => {
            dataC.forEach((category) => {
            createButton(category);
            galleryFilter(category);

    //Enregistrement dans le Local storage
    localStorage.setItem('category', JSON.stringify(dataC));
    window.sessionStorage.setItem("category", JSON.stringify(dataC));
            });
        });
    }
    
// Fonction pour afficher la Gallerie sur le DOM
export function createGallery(work) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    // Configuration de la Balise figure
    figure.id = work.id;
    figure.classList.add("card");
    // Configuration de la Balise img
    img.src = work.imageUrl;
    img.alt = work.title;
    img.setAttribute("data-id", work.id);
    // Configuration de la Balise figcaption
    figcaption.textContent = work.title;
    // Classement du Parent => l'Enfant
    figure.appendChild(img);
    figure.appendChild(figcaption);
    // Insertion dans l'elément Parent
    galleriesContainer.appendChild(figure);
}


// Variable pour vérifier si le bouton "tous existe déjà
let tousbuttonExists = false;

// Fonction pour afficher les boutons sur le DOM la Gallerie
function createButton(category) {
    const button = document.createElement("button");
    // Configuration de la Balise button
    button.id = category.id;
    button.classList.add("btnChoice");
    button.textContent = category.name;
    
    // Vérifié si le bouton "Tous" n'existe pas déjà
    if (!tousbuttonExists && category.name !== "Tous") {
        const buttonTous = document.createElement("button");
        buttonTous.innerText = "Tous";
        buttonTous.id = "Tous";
        buttonTous.classList.add("btnChoice");
        buttonTous.classList.add("filter_active");
        filterBtn.appendChild(buttonTous);
        tousbuttonExists = true;
    }
    // Insertion dans l'elément Parent
    filterBtn.appendChild(button);
}

// Function pour aficher la Galerie dans la Modale
export function createModalWork(workModal) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const button = document.createElement("button");
    const trash = document.createElement("i");

    trash.classList.add("fa-solid", "fa-trash-can", "faTrashCan", "fa-ms");
    button.classList.add("buttonDelete");
    button.id = workModal.id;
    img.src = workModal.imageUrl;
    img.alt = workModal.title;
    img.id = workModal.id;
    img.classList.add("imgModal");

    button.appendChild(trash);
    figure.appendChild(img);
    figure.appendChild(button);
    galleryModal.appendChild(figure)
  }

//fonction pour filtrer la Galleries par Catégories
export async function galleryFilter() {
    let works = JSON.parse(localStorage.getItem("works"));
    const Btns = document.querySelectorAll(".Filter_button button");
    Btns.forEach((button) => {
        button.addEventListener("click", (e) => {
            Btns.forEach((btn) => {
                btn.classList.remove("filter_active");
            });
            button.classList.add("filter_active");
            const btnId = e.target.id;
            galleriesContainer.innerHTML = "";
            works.forEach((work) => {
                if (btnId == work.categoryId) {
                    createGallery(work);
                }
                if ( btnId == "Tous" ) {
                    createGallery(work);
                }
            });     
        });
    }); 
}

export default worksConnect;