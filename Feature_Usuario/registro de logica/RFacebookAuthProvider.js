export class RFacebookAuthProvider {
  async iniciarSesion(FacebookToken) {
    // Aquí iría la validación real con Facebook API
    return { ok: true, proveedor: "Facebook", FacebookToken };
  }
}

