module.exports = function esCedulaValida(cedula) {
  const regex = /^\d{3}-?\d{7}-?\d{1}$/;
  return regex.test(cedula);
};