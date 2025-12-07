const express = require("express");
const app = express();

app.use(express.json());

// Crear dependencias:
const AuthRepository = require("./src/infrastructure/auth/AuthRepository");
const GoogleProvider = require("./src/infrastructure/external/GoogleAuthProvider");

const LoginUseCase = require("./src/application/usecases/LoginUseCase");
const LoginGoogleUseCase = require("./src/application/usecases/LoginGoogleUseCase");

const AuthController = require("./src/presentation/controllers/AuthController");
const authRoutes = require("./src/presentation/routes/auth.routes");

const authRepo = new AuthRepository();
const googleProvider = new GoogleProvider();

const loginUseCase = new LoginUseCase(authRepo);
const loginGoogle = new LoginGoogleUseCase(googleProvider);

const controller = new AuthController(loginUseCase, loginGoogle);

app.use("/auth", authRoutes(controller));

app.listen(3000, () => console.log("Server corriendo en 3000"));