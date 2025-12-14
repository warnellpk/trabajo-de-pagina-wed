export function ResCedulaValida(cedula) {
  if (!cedula) return false;

  // Quitar todo lo que no sea número
  const limpia = cedula.replace(/\D/g, "");

  // Validar longitud
  if (limpia.length !== 11 || limpia === "00000000000") return false;

  let suma = 0;

  for (let i = 0; i < 10; i++) {
    let valor = parseInt(limpia[i]) * (i % 2 === 0 ? 1 : 2);
    if (valor > 9) valor -= 9;
    suma += valor;
  }

  const digitoVerificador = (10 - (suma % 10)) % 10;

  return digitoVerificador === Number(limpia[10]);
}
