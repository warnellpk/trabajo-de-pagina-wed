const esCorreoValido = require("../../domain/validators/validateEmail");
const esCedulaValida = require("../../domain/validators/validateCedula");
const esClaveValida = require("../../domain/validators/validatePassword");

export class RegistroUseCase {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async execute({ usuario }) {

    if (!esClaveValida(usuario.contrasena)) {
      return { ok: false, mensaje: "La contraseña debe tener mínimo 8 caracteres." };
    }

    let tipo = null;

    if (esCedulaValida(usuario.cedula)) tipo = "cedula";
    else if (esCorreoValido(usuario.correo)) tipo = "correo";
    else return { ok: false, mensaje: "usuario inválido." };

    const usuario = await this.authRepository.buscarPorUsuaRio(usuario);

    if (!usuario) {
      return { ok: false, mensaje: "Usuario no encontrado." };
   

    }
  }
}

