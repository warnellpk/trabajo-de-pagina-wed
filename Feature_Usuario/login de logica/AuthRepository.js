import bcrypt from "bcrypt";

export class AuthRepository {

  async buscarPorIdentificador(identificador) {
  const usuarios = await obtenerUsuarios();
  return filtrarUsuario(usuarios, identificador);
}
  

  async obtenerUsuarios() {
  try {
    const response = await fetch(
      "http://localhost/api/usuarios.php?action=listar"
    );

    if (!response.ok) {
      throw new Error("No se pudo obtener la lista de usuarios");
    }

    const usuarios = await response.json();
    return usuarios;

  } catch (error) {
    console.error("Error obteniendo usuarios:", error.message);
    return [];
  }
}

 filtrarUsuario(usuarios, identificador) {
  const valor = identificador.trim().toLowerCase();

  const usuario = usuarios.find(u =>
    (u.correo && u.correo.toLowerCase() === valor) ||
    (u.cedula && u.cedula === valor)
  );

  return usuario || null;
}

async verificarContraseña(usuario, contraseñaIngresada) {
  if (!usuario || !usuario.contrasena) {
    return false;
  }

  const esValida = await bcrypt.compare(
    contraseñaIngresada,
    usuario.contrasena
  );

  return esValida;
}


  async generarToken(usuario) {
    // Generar JWT
  }


}


