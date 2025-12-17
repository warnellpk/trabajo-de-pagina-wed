export class AuthController {
  constructor(RegistroUseCase, RegistroGoogle, RegistroFacebook, RegistroApple) {
    this.RegistroUseCase = RegistroUseCase;
    this.RegistroGoogle = RegistroGoogle;
    this.RegistroFacebook = RegistroFacebook;
    this.RegistroApple = RegistroApple;
  }

  RegistroUseCase = async (req, res) => {
    const result = await this.RegistroUseCase.execute(req.body);
    res.json(result);
  };

  RegistroGoogle = async (req, res) => {
    const result = await this.RegistroGoogle.execute(req.body.token);
    res.json(result);
  };

  RegistroFacebook = async (req, res) => {
    const result = await this.RegistroFacebook.execute(req.body.token);
    res.json(result);
  };

  RegistroApple = async (req, res) => {
    const result = await this.RegistroApple.execute(req.body.token);
    res.json(result);
  };
}

