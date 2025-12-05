class Reporte {
    Actualizaciones //string
    Foro //Array of String
    Institucion //String

    constructor(id, Usuario_ID, Categoria, descripcion, ubicacion, Evidencia, fecha = new Date()) {
        this.id = id;
        this.Usuario_ID = Usuario_ID;
        this.Categoria = Categoria;
        this.descripcion = descripcion;
        this.estado = "pendiente";
        this.ubicacion = [X, Y]
        this.evidencia = Evidencia
    }
}
