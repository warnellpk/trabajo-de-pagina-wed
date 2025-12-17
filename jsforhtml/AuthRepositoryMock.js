export class AuthRepositoryMock {
    constructor() {
        alert("Dentro del AuthRepositoryMock");
    }
    async buscarPorIdentificador(identificador) {
        return { id: 1, nombre: "Usuario de Prueba", identificador };
    }

    async generarToken(usuario) {
        // Simple mock token basado en el id del usuario
        return `token-for-${usuario && usuario.id ? usuario.id : 'unknown'}`;
    }
}
