export class RGoogleAuthProvider {
  async iniciarSesion(googleToken) {
    // Aquí iría la validación real con Google API
    return { ok: true, proveedor: "Google", googleToken };
  }
}

