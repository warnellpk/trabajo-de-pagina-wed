class LoginFacebookUseCase {
  constructor(FacebookProvider) {
    this.FacebookProvider = FacebookProvider;
  }

  async execute(tokenFacebook) {
    return this.FacebookProvider.iniciarSesion(tokenFacebook);
  }
}

module.exports = LoginFacebookUseCase;