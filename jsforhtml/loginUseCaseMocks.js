export class LoginUseCaseMock {
    async execute({ identificador, contrasena }) {
        // Simulamos una demora de red
        console.log("Dentro del LoginUseCaseMock");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const usuarioValido = "admin@correo.com";
                const claveValida = "1234";

                if (identificador === usuarioValido && contrasena === claveValida) {
                    resolve({ status: 200, message: "¡Bienvenido de nuevo!", user: { name: "Admin Test" } });
                } else {
                    reject({ status: 401, message: "Credenciales incorrectas" });
                }
            }, 800);
        });
    }
}