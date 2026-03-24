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

function logout() {
    window.location.href = "index.html";
}

// ==========================
// ♿ ACCESIBILIDAD
// ==========================
function toggleAccesibilidad() {
    document.body.classList.toggle("accesibilidad");
}

// ==========================
// 💬 CHAT
// ==========================
const chatBody = document.querySelector(".chat-body") || document.getElementById("chatBody");
const chatInput = document.querySelector(".chat-input-area input") || document.getElementById("chatInput");
const chatButton = document.querySelector(".chat-input-area button") || document.getElementById("chatSendBtn");

if(chatButton && chatInput && chatBody){
    chatButton.addEventListener("click", enviarMensaje);
    chatInput.addEventListener("keypress", function(e){
        if(e.key === "Enter") enviarMensaje();
    });
}

function enviarMensaje() {
    const texto = chatInput.value.trim();
    if(texto === "") return;

    // Mensaje del usuario
    const userDiv = document.createElement("div");
    userDiv.className = "user-msg"; 
    userDiv.textContent = texto; // Usamos textContent por seguridad y limpieza
    chatBody.appendChild(userDiv);

    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulación de respuesta bot
    setTimeout(() => {
        const botDiv = document.createElement("div");
        botDiv.className = "bot-msg"; 
        botDiv.textContent = "¡Mensaje recibido! Nuestro equipo revisará tu solicitud.";
        chatBody.appendChild(botDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}