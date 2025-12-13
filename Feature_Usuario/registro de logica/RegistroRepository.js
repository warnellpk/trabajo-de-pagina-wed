
export class AuthRepository {

  async buscarPorIdentificador(identificador) {
  const usuarios = await obtenerUsuarios();
  return filtrarUsuario(usuarios, identificador);
}
  

  async obtenerUsuarios() {
  const res = await fetch(
    "http://localhost/api/usuarios.php?action=listar"
  );
  return await res.json();
}

usuarioExiste(usuarios, email, telefono) {
  return usuarios.some(u =>
    (u.email && u.email.toLowerCase() === email.toLowerCase()) ||
    (u.telefono && u.telefono === telefono)
  );
}

}

export async function crearUsuario({
  nombre,
  email,
  telefono,
  password
}) {
  try {
    // Traer usuarios existentes
    const usuarios = await obtenerUsuarios();

    // Validar duplicado
    if (usuarioExiste(usuarios, email, telefono)) {
      return {
        error: true,
        mensaje: "El usuario ya existe"
      };
    }

    // Crear usuario
    const url = new URL("http://localhost/api/usuarios.php");

    url.searchParams.append("action", "crear");
    url.searchParams.append("nombre", nombre);
    url.searchParams.append("email", email);
    url.searchParams.append("telefono", telefono);
    url.searchParams.append("password", password);
    url.searchParams.append("Id", id);
    url.searchParams.append("direccion", direccion);
    url.searchParams.append("reputacion", reputacion);
    url.searchParams.append("foto_perfil", foto_perfil);
    url.searchParams.append("descripcion", descripcion);
    url.searchParams.append("cargo_rol", cargo_rol);
    url.searchParams.append("historial", historial);
    url.searchParams.append("estadistica", estadistica);
    url.searchParams.append("id_rol", id_rol);
    url.searchParams.append("fecha_registro", fecha_registro);

    const response = await fetch(url.toString(), { method: "GET" });

    if (!response.ok) {
      throw new Error("No se pudo crear el usuario");
    }

    return await response.json();

  } catch (error) {
    console.error("Error creando usuario:", error.message);
    return null;
  }
}

