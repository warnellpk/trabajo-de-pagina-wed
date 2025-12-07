class LoginAppleUseCase {
  constructor(AppleProvider) {
    this.AppleProvider = AppleProvider;
  }

  async execute(tokenApple) {
    return this.AppleProvider.iniciarSesion(tokenApple);
  }
}

module.exports = LoginAppleUseCase;