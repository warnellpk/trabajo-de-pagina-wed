class AuthRepository {
  async buscarPorIdentificador(identificador) {
    // Buscar usuario en base de datos (correo o cédula)
  }

  async verificarContraseña(usuario, contraseña) {
    // Comparar contraseña encriptada
  }

  async generarToken(usuario) {
    // Generar JWT
  }
}

module.exports = AuthRepository;