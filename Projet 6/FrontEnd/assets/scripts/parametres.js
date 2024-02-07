// Paramètres

const apiUrl = "http://localhost:5678/api/";
const apiWorks = "works/";
const apiCategories = "categories/";
const apiLogin = "users/login";

// Recupération de de la gallereiesContainer
const galleriesContainer = document.querySelector(".gallery");
const filterBtn = document.querySelector(".Filter_button");
const showButton = document.querySelector(".js-ShowButton");
const btnCategory = document.createElement("button");
const loginVisible = document.querySelector(".loginVisible");
const logoutVisible = document.querySelector(".logoutVisible");
const modalEdit = document.querySelector(".modalEdit");
const token = localStorage.getItem("token");
const showDialog = document.getElementById("showDialog");
const containGallery = document.getElementById("gallery");
const jsModal = document.querySelector(".js-modal");
const modal_1 = document.querySelector(".modal-1");
const modal_2 = document.querySelector(".modal-2");
const categoryStorage = localStorage.getItem("category");


export { 
    apiUrl, modalEdit,
    apiWorks, showDialog,
    apiCategories,
    galleriesContainer,
    btnCategory, containGallery,
    apiLogin, filterBtn, jsModal,
    token, showButton, modal_1, modal_2,
    loginVisible, categoryStorage,
    logoutVisible,
}