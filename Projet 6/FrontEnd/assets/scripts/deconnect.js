// création de la fonction de déconnexion

function redirectionHomePage() {
    document.location.href = "index.html"; 
  }


function deconnect() {
    const loginLink = document.querySelector(".logoutVisible");

    if ( loginLink ) {
        // Vérification si le bouton est déjà stocké dans le local Storage
        if ( localStorage.getItem("token")) {

            // Changement du texte du lien 'login" en "logout"
            loginLink.textContent = "logout";

            // Déconnexion lord du clique sur "logout"
            loginLink.addEventListener("click", function (event) {
                event.preventDefault();

            // Suppression du token du local storage
                localStorage.removeItem("token");

            // Redirection vers la page d'identification
            window.location.href = "login.html";
            });
        }
    }
}

export default deconnect;