export class RegistroGoogleUseCase {
  constructor(googleProvider) {
    this.googleProvider = googleProvider;
  }

  async execute(tokenGoogle) {
    return this.googleProvider.iniciarSesion(tokenGoogle);
  }
}

