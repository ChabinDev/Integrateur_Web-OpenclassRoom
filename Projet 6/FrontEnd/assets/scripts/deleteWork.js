import { apiUrl, apiWorks, token } from "./parametres.js";
import openModal, { resetForm } from "./modal.js";

// Variables 
const modalDiv = document.querySelector(".modalGallery");
export const errorDelete = document.querySelector(".errorDelete");
export const successDelete = document.querySelector(".successDelete");

// Ajouter un gestionnaire d'évènement délégué pour la galerie modale
modalDiv.addEventListener("click", deleteWorksId);

// Suppression des works avec un event Délégation
export  function deleteWorksId(e) {
  if (e.target.nodeName.toLowerCase() !== "i") {
    return;
  }
  
  // Variable
  const workItemId = e.target.parentNode.id;
  
  //************** connection à la Base de donnée pour la suppression */
  fetch(apiUrl + apiWorks + workItemId, {
    method: "DELETE",
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
     if  ( res.status === 204 ) {
        successDelete.style.visibility = "visible";
        successDelete.textContent = "Projet Supprimé avec succès";
        successDelete.style.display = "flex";

        //Cacher le texte après 10 secondes
        setTimeout(() => {
          successDelete.style.visibility = "hidden";
          successDelete.textContent = "";
          successDelete.style.display = "none";
        }, 2000);

        // Suppression de l'image du DOM
        const deletedItem = document.getElementById(workItemId);
        deletedItem.parentNode.removeChild(deletedItem);
        
        // suppresion de l'image dans la Modal
        const modalItem = document.querySelector(`.modalGallery [id="${workItemId}"]`);
        modalItem.parentNode.removeChild(modalItem);
        
        //suppression de l'icone corbeille de la Modal
        const modalIcon = document.querySelector(`.buttonDelete[id="${workItemId}"]`);
        modalIcon.parentNode.removeChild(modalIcon);
     } else {
        errorDelete.style.visibility = "visible";
        errorDelete.textContent = "Erreur dans la suppression du projet";
        errorDelete.style.display = "flex";

        //Cacher le Message d'erreur après 10 secondes
        setTimeout(() => {
          errorDelete.style.visibility = "hidden";
          errorDelete.textContent = "";
          errorDelete.style.display = "none";
        }, 2000);
      }
      }).catch((error) => {
        alert(error)
       });
    }
      
export default deleteWorksId;