// Les Variables d'Environnements
import { loginVisible, logoutVisible, token, modalEdit, showButton, jsModal } from "./parametres.js";
import { deleteWorksId } from "./deleteWork.js";
import { addWorks, prevImg } from "./addWork.js";
import { displayConnect, createAllButton, galleryFilter, createGallery } from "./worksConnect.js";
import deconnect from "./deconnect.js";
import openModal from "./modal.js";

displayConnect();
createAllButton();
createGallery;
galleryFilter();

const bannerEdition = document.querySelector(".bannerEdit");
const flexModal = document.querySelector(".flexModal");

const init = async () => {
  if ( token ) {
    showButton.style.display = "none"; // Effacer l'affichage des boutons
      flexModal.style.margin = "40px"; 
      modalEdit.style.display = "flex";
      loginVisible.style.display = "none"; // Texte Login en Flex
      logoutVisible.style.display = "block"; // Texte Logout en Block
      logoutVisible.style.visibility = "visible"; // Afficher le Texye Logout si Token à Oui
      jsModal.style.visibility = "visible";
      bannerEdition.style.visibility = "visible";
      bannerEdition.style.display = "block";
      prevImg();
      addWorks();
      deleteWorksId;
      openModal();
      deconnect();
    }
  }
  
  init();