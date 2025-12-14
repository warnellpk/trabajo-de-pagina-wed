export class RAppleAuthProvider {
  async iniciarSesion(AppleToken) {
    // Aquí iría la validación real con Apple API
    return { ok: true, proveedor: "Apple", AppleToken };
  }
}

