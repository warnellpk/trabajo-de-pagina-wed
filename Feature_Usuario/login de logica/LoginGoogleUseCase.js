class LoginGoogleUseCase {
  constructor(googleProvider) {
    this.googleProvider = googleProvider;
  }

  async execute(tokenGoogle) {
    return this.googleProvider.iniciarSesion(tokenGoogle);
  }
}

module.exports = LoginGoogleUseCase;