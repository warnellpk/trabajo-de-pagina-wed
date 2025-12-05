const Roles = {
  Normal: {
    permisos: {
      puedeIniciarSesion: true,
      puedeRegistrar: true,
      puedeReportar: true,
      puedeVerDenuncias: true,
      puedeVerHistorial: true,
      puedeCancelarDenuncias: true,
      puedePublicarForo: true
    }
  },

  Administrador: {
    permisos: {
      puedeVerUsuarios: true,
      puedeEliminarUsuarios: true,
      puedeBanearUsuarios: true
    }
  }
};

module.exports = Roles;
