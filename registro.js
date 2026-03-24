// ==========================
// 🔐 REGISTRO
// ==========================
function registrar() {
    let pass = document.getElementById("passReg").value;
    let confirm = document.getElementById("confirmPass").value;

    if(pass !== confirm){
        alert("Las contraseñas no coinciden");
        return;
    }

    let email = document.getElementById("emailReg").value;

    localStorage.setItem("user", email);
    localStorage.setItem("pass", pass);

    alert("Usuario registrado");
    window.location.href = "login.html";
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