export function ResClaveValida(clave) {
  if (!clave || typeof clave !== "string") return false;
  return clave.length >= 8;
}
