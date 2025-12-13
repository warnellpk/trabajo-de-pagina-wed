export class RegistroAppleUseCase {
  constructor(AppleProvider) {
    this.AppleProvider = AppleProvider;
  }

  async execute(tokenApple) {
    return this.AppleProvider.iniciarSesion(tokenApple);
  }
}

