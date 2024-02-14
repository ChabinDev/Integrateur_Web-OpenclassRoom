
const loginForm = document.querySelector("form");
const loginError = document.querySelector(".error");

function redirectionHomePage() {
  document.location.href = "../../../index.html"; 
}

  loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const emailValue = document.getElementById("email").value;
  console.log(emailValue);
  const passwordValue = document.getElementById("password").value;
  console.log(passwordValue);
  
  if (emailValue && passwordValue) {
    const response = await login(emailValue, passwordValue)
    if (response.token){
      localStorage.setItem("token", response.token);
      window.sessionStorage.setItem("token", response.token);
      redirectionHomePage()
    } else{
      email.style.border = "2px solid #FF0000";
      password.style.border = "2px solid #FF0000";
      loginError.style.display = "flex";
      loginError.style.visibility = "visible";
      loginError.style.fontSize = "14px";
      loginError.style.color = "red";
      loginError.style.fontWeight = "bold";
      loginError.classList.add('errorLog');
      loginError.textContent = "Le Mot de Passe ou l'identifiant que vous avez fourni est incorrect.";
    }
  }
});

const login = async (email, password) => {
  const response = await fetch("http://localhost:5678/api/users/login", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  return response.json()
}
