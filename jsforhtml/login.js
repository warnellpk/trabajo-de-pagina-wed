import { LoginUseCaseMock } from './loginUseCaseMocks.js';
import { RegisterUseCaseMock } from './registerUseCaseMock.js';

const loginUC = new LoginUseCaseMock();
const registerUC = new RegisterUseCaseMock();

// --- Navegación de Interfaz ---
window.cambiarTab = (tipo) => {
    const formLogin = document.getElementById('formLogin');
    const formRegistro = document.getElementById('formRegistro');
    const formRecovery = document.getElementById('formRecovery');
    const tabLogin = document.getElementById('tabLogin');
    const tabRegistro = document.getElementById('tabRegistro');
    const tabsNav = document.getElementById('authTabs');

    tabsNav.style.display = 'flex';
    formRecovery.style.display = 'none';

    if (tipo === 'login') {
        formLogin.style.display = 'block';
        formRegistro.style.display = 'none';
        tabLogin.classList.add('active');
        tabRegistro.classList.remove('active');
    } else {
        formLogin.style.display = 'none';
        formRegistro.style.display = 'block';
        tabLogin.classList.remove('active');
        tabRegistro.classList.add('active');
    }
};

window.mostrarRecuperacion = () => {
    document.getElementById('formLogin').style.display = 'none';
    document.getElementById('formRegistro').style.display = 'none';
    document.getElementById('authTabs').style.display = 'none';
    document.getElementById('formRecovery').style.display = 'block';
};

window.ocultarRecuperacion = () => {
    window.cambiarTab('login');
};

// --- Acciones de Formulario ---

window.validarLogin = async (event) => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;
    const alertBox = document.getElementById('loginAlert');

    try {
        const respuesta = await loginUC.execute({ identificador: email, contrasena: pass });
        alert(respuesta.message);
        window.location.href = "/dashboard.html"; // Redirección ficticia
    } catch (error) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${error.message}`;
    }
};

window.validarRegistro = async (event) => {
    event.preventDefault();
    
    const datos = {
        nombre: document.getElementById('regNombre').value,
        direccion: document.getElementById('regDireccion').value,
        email: document.getElementById('regEmail').value,
        pass: document.getElementById('regPass').value,
        passConfirm: document.getElementById('regPassConfirm').value,
        telefono: document.getElementById('regTelefono').value,
        cedula: document.getElementById('regCedula').value
    };

    if (datos.pass !== datos.passConfirm) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    try {
        const respuesta = await registerUC.execute(datos);
        alert(respuesta.message);
        window.cambiarTab('login');
    } catch (error) {
        alert("Error al registrar: " + error.message);
    }
};

window.procesarRecuperacion = (event) => {
    event.preventDefault();
    alert("Enlace de recuperación enviado al correo.");
    window.ocultarRecuperacion();
};