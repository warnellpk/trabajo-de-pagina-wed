// Validar correo
const validarCorreo = (correo) => {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(correo);
};
// Validar que la contraseña tenga 8 caracteres 
const validarClave = (clave) => {
  const patron = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return patron.test(clave);
};

// Validar cedula con el algoritmo de luhn
const validarCedula = (cedula) => {
  cedula = cedula.replace(/-/g, "");

  if (cedula.length !== 11) return false;

  let suma = 0;
  let multiplo = 1;

  for (let i = 0; i < 11; i++) {
    let digito = parseInt(cedula[i]) * multiplo;

    if (digito > 9) digito -= 9;

    suma += digito;

    // alternar multiplicador 1 - 2
    multiplo = multiplo === 1 ? 2 : 1;
  }

  return (suma % 10 === 0);
};

// Validacion completa antes de mandarla a api
const validarUsuario = (usuario) => {
  if (!usuario.nombre || !usuario.apellido) 
    return { ok: false, mensaje: "Nombre y apellido son obligatorios" };

  if (!validarCorreo(usuario.correo)) 
    return { ok: false, mensaje: "Correo inválido" };

  if (!validarClave(usuario.clave)) 
    return { ok: false, mensaje: "La clave debe tener mínimo 8 caracteres" };

  if (!validarCedula(usuario.cedula)) 
    return { ok: false, mensaje: "La cédula no es válida" };

  return { ok: true };
};

