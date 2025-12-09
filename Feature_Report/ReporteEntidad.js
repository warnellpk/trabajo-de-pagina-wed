export class ReporteEntidad {
    Actualizaciones; //Array of string, se actualiza con la repuesta de la institucion y sus avances
    Foro; //Array of String, se actualiza desde la pagina con los comentarios de la denuncias
    Institucion; //String, se declara depues de extraer la institucion de la ubicacion

    constructor(Id, UsuarioId, Categoria, Descripcion, Ubicacion, Evidencia, Fecha = new Date()) {
        this.Id = Id; //Posiblemente implementar el algoritmo de luhn
        this.UsuarioId = UsuarioId;
        this.Categoria = Categoria;
        this.Descripcion = Descripcion;
        this.Estado = "Pendiente"; /* Todo reporte empienza en Pendiente, luego si fue visto o respondido 
        por la institucion entonces pasa a "En revision" y finalmente pasa a "Resuelto" o "Rechazado" */
        this.Ubicacion = Ubicacion; // Ubicacion en google maps, google maps tienes las coordenadas en el URL
        this.Evidencia = Evidencia; //Referencia al archivo que contiene las fotos o videos que se subio como evidencia
        this.Fecha = Fecha
    }
}