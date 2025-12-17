 export default class LoginUseCaseMock {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async execute({ identificador, contrasena }) {
alert("Dentro del execute del mock")
    
   var clave = "1234"
   var email = "adderlis@gmail.com"
   var coicide = false
   
   if(identificador === email && clave === contrasena ){
    coicide = true
   }

    if (!coicide) {
      return { ok: false, mensaje: "Contraseña incorrecta." };
    }

   

    return { ok: true };
  }
}