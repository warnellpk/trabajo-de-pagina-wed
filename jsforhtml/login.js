
import AuthRepositoryMock from './AuthRepositoryMock.js';
import LoginUseCaseMock from './LoginUseCaseMock.js';
// REFERENCIAS DOM
const tabsH = document.getElementById('authTabs');
const fLogin = document.getElementById('formLogin');
const fReg = document.getElementById('formRegistro');
const fRec = document.getElementById('formRecovery');


function cambiarTab(t) {
    fRec.classList.remove('active-form'); 
    tabsH.style.display='flex';
    document.querySelectorAll('.input-error').forEach(e => e.classList.remove('input-error'));
    document.getElementById('loginAlert').style.display='none';

    if(t === 'login'){
        document.getElementById('tabLogin').classList.add('active'); 
        document.getElementById('tabRegistro').classList.remove('active');
        fLogin.classList.add('active-form'); 
        fReg.classList.remove('active-form');
    } else {
        document.getElementById('tabRegistro').classList.add('active'); 
        document.getElementById('tabLogin').classList.remove('active');
        fReg.classList.add('active-form'); 
        fLogin.classList.remove('active-form');
    }
}


function loginExecute() {
    alert("Iniciando sesión...");
    var authRepository = new AuthRepositoryMock();
    var loginUseCase = new LoginUseCaseMock(authRepository);
        alert("despues de crear ...");
    var email = document.getElementById("loginEmail").value;
    var passsword = document.getElementById("loginPass").value;

  try {
    var respond =  loginUseCase.execute({ identificador: email, contrasena: passsword });
    alert("Respuesta: " + JSON.stringify(respond));
  } catch (err) {
    console.error(err);
    alert("Error al iniciar sesión: " + err.message);
  }

  return { ok: true };
}