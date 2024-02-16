import { galleriesContainer,token, } from "./parametres.js";
import { createGallery, createModalWork } from "./worksConnect.js";
import { errorDelete } from "./deleteWork.js";
import { validMessage } from "./addWork.js";

// Enregistrement des Variables nécessaire pour la modale

// Variable pour les deux Modales
export const section1 = document.querySelector(".modal-1");
const section2 = document.querySelector(".modal-2");
// Variables pour les deux boutons Fermeture des Modales
const modalClose1 = document.querySelector(".jsModalClose1");
const modalClose2 = document.querySelector(".jsModalClose2");
// Variable pour le bouton retour en arrière de la Modale
const prevModal = document.querySelector(".prev");
// Variable pour le bouton Modifier pour ouvrir la première Modale
const showModal = document.querySelector("#showDialog");
// Variable pour le bouton qui permet d'ouvrir la Modale 2
const addImage = document.querySelector(".addImg");


const viewModalFile = document.getElementById("preview-file");
const imgGallery = document.getElementById("imgGallery");
const AddPhotoI = document.querySelector(".AddPhoto i");
const importImgage = document.querySelector(".importImage");
const UploadFile = document.querySelector(".AddPhoto p");
const bannerEdition = document.querySelector(".editBanner")
const galleryModal = document.querySelector(".modalGallery");
const errorMessage = document.querySelector(".errorMessage");


let modal = null;
const focusableSelector = "button, a, input, textarea, i";
let focusables = [];
let previouslyFocusedElement = null;

// Fonction qui permet d'ouvrir la Section 1 de la Modale suite click sur le bouton Modifier
function openModal() {
  showModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal = document.querySelector(e.target.getAttribute('href'));
  focusables = Array.from(modal.querySelectorAll(focusableSelector));
  previouslyFocusedElement = document.querySelector(':focus');
  modal.style.display = null;
  focusables[0].focus();
  modal.removeAttribute('aria-hidden');
  modal.setAttribute('aria-modal', 'true');
  modal.addEventListener('click', closeModal);
  modal.querySelector('.jsModalClose1').addEventListener('click', closeModal);
  modal.querySelector('.jsModalStop1').addEventListener('click', stopPropagation);
  section1.style.display = 'block';
  section2.style.display = 'none';
  bannerEdition.style.display = 'flex';
 })
}

   // Fonction pour fermer la Modal de la Section 1
    export const closeModal = function (e) {
      if ( modal === null ) return
      if ( previouslyFocusedElement !== null ) previouslyFocusedElement.focus();
        e.preventDefault();
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', 'true');
        modal.removeAttribute('aria-modal');
        modal.removeEventListener('click', closeModal)
        modal.querySelector('.jsModalStop1').removeEventListener('click', stopPropagation);
        modal.querySelector('.jsModalClose1').removeEventListener('click', closeModal);
        modal = null;
        section1.style.display = "none";
        bannerEdition.style.display = 'flex';
        resetForm();
        location.reload(closeModal);
   }

   const stopPropagation = function (e) {
    e.stopPropagation();
   }

      
  // Fonction qui permet d'ouvrir la Section 2 de la Modale suite click sur le bouton ajouter Photo
    addImage.addEventListener('click', (e) => {
      focusables = Array.from(modal.querySelectorAll(focusableSelector));
      previouslyFocusedElement = document.querySelector(':focus');
      modal.style.display = null;
      focusables[0].focus()
      modal.removeAttribute('aria-hidden')
      modal.setAttribute('aria-modal', 'true')
      modal.addEventListener("click", closeModal)
      modal.querySelector('.jsModalStop2').addEventListener('click', stopPropagation);
      modal.querySelector('.jsModalClose2').addEventListener('click', closeModal);
      section1.style.display = 'none';
      section2.style.display = 'block';
    resetForm();

  })
  
    // Function de retour sur la Section 1 en cliquant sur le bouton arrow-right
    prevModal.addEventListener('click', () => {
    section1.style.display = 'block';
    section2.style.display = 'none';
    AddPhotoI.style.display = "block"
    importImgage.style.display = "flex"
    UploadFile.style.display = "block"
    viewModalFile.style.display = 'none';
    errorMessage.textContent = "";
    resetForm();
    })


    // Fonction pour fermer la Modal de la Section 2
        modalClose2.addEventListener('click', () => {
        modal.setAttribute("aria-hidden", true);
        modal.removeAttribute("aria-modal");
        modal.style.display = "none";
        viewModalFile.style.display = 'none';
        modal = null;
        errorMessage.textContent = "";
        resetForm();
        location.reload(closeModal);    
    })

  
    export function resetForm() {
      document.getElementById("preview-file").value = "";
      document.getElementById("imgGallery").value = "";
      document.getElementById("preview-file").value = "";
      document.getElementById("formAddImg").value = "";
      document.querySelectorAll(".imgPreview").value = "";
      document.querySelectorAll("AddPhoto").value = "";
      errorDelete.style.visibility = "hidden";
      validMessage.textContent = "";
  }
  
  const focusInModal = function (e) {
    e.preventDefault()
    let index = focusables.findIndex(f => f === modal.querySelector(':focus'))
    if ( e.shiftKey === true) {
      index--
    } else {
      index++  
    }
    
    if ( index >= focusables.length) {
      index = 0
    }
    if ( index < 0) {
      index = focusables.length - 1
    }
    focusables[index].focus()
  }
  
  // fonction pour quitter le modal Modal avec escape et Esc
  window.addEventListener("keydown", function (e) {
    if ( e.key === "Escape" || e.key === "Esc" ) {
      closeModal(e)
    }
    if ( e.key === "Tab" && modal !== null ) {
      focusInModal
    }
  })

   export default openModal;
