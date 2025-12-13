const express = require("express");
const app = express();

app.use(express.json());

// Crear dependencias:
const AuthRepository = require("./src/infrastructure/auth/AuthRepository");
const GoogleProvider = require("./src/infrastructure/external/GoogleAuthProvider");

const RegistroUseCase = require("./src/application/usecases/RegistroUseCase");
const RegistroGoogleUseCase = require("./src/application/usecases/RegistroGoogleUseCase");

const AuthController = require("./src/presentation/controllers/AuthController");
const authRoutes = require("./src/presentation/routes/auth.routes");

const authRepo = new AuthRepository();
const googleProvider = new GoogleProvider();

const RegistroUseCase = new RegistroUseCase(authRepo);
const RegistroGoogle = new RegistroGoogleUseCase(googleProvider);

const controller = new AuthController(RegistroUseCase, RegistroGoogle);

app.use("/auth", authRoutes(controller));

app.listen(3000, () => console.log("Server corriendo en 3000"));