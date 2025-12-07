class FacebookAuthProvider {
  async iniciarSesion(FacebookToken) {
    // Aquí iría la validación real con Facebook API
    return { ok: true, proveedor: "Facebook", FacebookToken };
  }
}

module.exports = FacebookAuthProvider;