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
function enviarMensaje() {
    const texto = chatInput.value.trim();
    if(texto === "") return;

    // --- MENSAJE DEL USUARIO ---
    const userDiv = document.createElement("div");
    // Usamos 'msg user' para heredar los estilos base y el color azul
    userDiv.className = "msg user"; 
    userDiv.textContent = texto; 
    chatBody.appendChild(userDiv);

    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // --- SIMULACIÓN DE RESPUESTA BOT ---
    setTimeout(() => {
        const botDiv = document.createElement("div");
        // Usamos 'msg bot' para que sea idéntico al mensaje de bienvenida
        botDiv.className = "msg bot"; 
        botDiv.textContent = "¡Mensaje recibido! Nuestro equipo de arquitectos UserVix revisará tu diseño pronto.";
        chatBody.appendChild(botDiv);
        
        // Auto-scroll al final
        chatBody.scrollTo({
            top: chatBody.scrollHeight,
            behavior: 'smooth'
        });
    }, 1000);
}