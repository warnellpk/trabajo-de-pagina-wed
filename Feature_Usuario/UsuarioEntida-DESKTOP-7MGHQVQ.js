export class Usuario {
  constructor({
    id,
    nombreApellido,
    direccion,
    correo,
    telefono,
    contrasena,
    reputacion = 0,
    fotoPerfil = "",
    descripcion = "",
    cargoRol = "",
    historial = [],
    estadistica = {},
    cedula
  }) {
    this.id = id; 
    this.nombreApellido = nombreApellido;
    this.direccion = direccion;
    this.correo = correo;
    this.telefono = telefono;
    this.contrasena = contrasena;
    this.reputacion = reputacion;
    this.fotoPerfil = fotoPerfil;
    this.descripcion = descripcion;
    this.cargoRol = cargoRol;
    this.historial = historial;
    this.estadistica = estadistica;
    this.cedula = cedula;
    this.creadoEn = new Date();
  }
}

