export function esCorreoValido(correo) {
  if (!correo || typeof correo !== "string") return false;

  const limpio = correo.trim().toLowerCase();

  // Email estándar (RFC simplificado)
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  return regex.test(limpio);
}
