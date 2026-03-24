// ==========================
// 🔐 LOGIN
// ==========================
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let remember = document.getElementById("remember").checked;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if(email === savedUser && pass === savedPass){

        if(remember){
            localStorage.setItem("session", "active");
        }

        window.location.href = "dashboard.html";
    } else {
        alert("Datos incorrectos");
    }
}

// ==========================
// 🌙 MODO OSCURO
// ==========================
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("darkBtn");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("darkMode", "true");
        btn.textContent = "☀️";
    } else {
        localStorage.setItem("darkMode", "false");
        btn.textContent = "🌙";
    }
}

// 🔥 mantener modo oscuro o claro dependiendo cual esté activo al recargar
window.onload = function(){
    let btn = document.getElementById("darkBtn");

    if(localStorage.getItem("darkMode") === "true"){
        document.body.classList.add("dark-mode");
        if(btn) btn.textContent = "☀️";
    } else {
        if(btn) btn.textContent = "🌙";
    }
}