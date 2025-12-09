const esCorreoValido = require("../../domain/validators/validateEmail");
const esCedulaValida = require("../../domain/validators/validateCedula");
const esClaveValida = require("../../domain/validators/validatePassword");

class LoginUseCase {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async execute({ identificador, contraseña }) {

    if (!esClaveValida(contraseña)) {
      return { ok: false, mensaje: "La contraseña debe tener mínimo 8 caracteres." };
    }

    let tipo = null;

    if (esCedulaValida(identificador)) tipo = "cedula";
    else if (esCorreoValido(identificador)) tipo = "correo";
    else return { ok: false, mensaje: "Identificador inválido." };

    const usuario = await this.authRepository.buscarPorIdentificador(identificador);

    if (!usuario) {
      return { ok: false, mensaje: "Usuario no encontrado." };
    }

    const coincide = await this.authRepository.verificarContraseña(usuario, contraseña);

    if (!coincide) {
      return { ok: false, mensaje: "Contraseña incorrecta." };
    }

    const token = await this.authRepository.generarToken(usuario);

    return { ok: true, tipo, usuario, token };
  }
}

module.exports = LoginUseCase;