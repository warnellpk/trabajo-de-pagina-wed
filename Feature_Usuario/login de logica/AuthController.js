class AuthController {
  constructor(loginUseCase, loginGoogle, loginFacebook, loginApple) {
    this.loginUseCase = loginUseCase;
    this.loginGoogle = loginGoogle;
    this.loginFacebook = loginFacebook;
    this.loginApple = loginApple;
  }

  login = async (req, res) => {
    const result = await this.loginUseCase.execute(req.body);
    res.json(result);
  };

  loginGoogle = async (req, res) => {
    const result = await this.loginGoogle.execute(req.body.token);
    res.json(result);
  };

  loginFacebook = async (req, res) => {
    const result = await this.loginFacebook.execute(req.body.token);
    res.json(result);
  };

  loginApple = async (req, res) => {
    const result = await this.loginApple.execute(req.body.token);
    res.json(result);
  };
}

module.exports = AuthController;