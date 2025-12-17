export class RegisterUseCaseMock {
    async execute(datosUsuario) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Datos recibidos en Mock:", datosUsuario);
                // Simulamos que el registro siempre es exitoso si hay datos
                if (datosUsuario.nombre && datosUsuario.email) {
                    resolve({ status: 201, message: "Cuenta creada con éxito" });
                } else {
                    resolve({ status: 400, message: "Faltan datos obligatorios" });
                }
            }, 1000);
        });
    }
}