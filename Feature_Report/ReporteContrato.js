class ReporteContrato {
    // Método para actualizar el estado del reporte, se necesitaria una API que detecte los cambio de estados y llame al metodo
    ActualizarEstado(NuevoEstado) {
        const EstadosValidos = ["Pendiente", "En revision", "Resuelto", "Rechazado"];
        if (EstadosValidos.includes(NuevoEstado)) {
            this.Estado = NuevoEstado;
        } else {
            throw new Error("Estado inválido");
        }
    }

    // Método para mostrar el reporte en formato legible
    async verReportes() {
        try {
            const response = await fetch("http://localhost/api/denuncias.php?action=listar");

            if (!response.ok) {
                throw new Error("Error en la petición: " + response.status);
            }

            const reportesJson = await response.json();

            // Convertimos cada objeto del JSON en una instancia de Reporte
            const reportes = reportesJson.map(r =>
                new Reporte(
                    r.Id,
                    r.UsuarioId,
                    r.Categoria,
                    r.Descripcion,
                    r.Ubicacion,
                    r.Evidencia,
                    r.Fecha ? new Date(r.Fecha) : new Date()
                )
            );

            console.log(reportes); // ahora son objetos de tipo Reporte
            return reportes;
        } catch (error) {
            console.error("Hubo un problema al obtener los reportes:", error);
            return null;
        }
    }

    async crearReporte(reporte) {
        try {
            const response = await fetch("http://localhost/api/denuncias.php?action=crear", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reporte) // enviamos el objeto como JSON
            });

            if (!response.ok) {
                throw new Error("Error en la petición: " + response.status);
            }

            return true;
        } catch (error) {
            console.error("Hubo un problema al crear el reporte:", error);
            return false;
        }
    }



    // Metodo para validar que los campos esenciales esten completos
    ValidarNecesarios() {
        if (!this.UsuarioId || !this.Categoria || !this.Descripcion || !this.Evidencia || !this.Ubicacion) { //las demas variables no se recibe del usuario entonces no queremos error cuando solo le falta de nuestra parte para estar completo
            return false;
        }
        return true;
    }
    ValidarCategoria() {
        const CategoriaValidas = ["Luz", "Bache", "Basura", "Agua", "Seguridad", "Parques", "inundaciones", "Alumbrado publico", "Estructuras", "Otros"];
        if (CategoriaValidas.includes(this.Categoria)) {
            return true;
        } else {
            throw new Error("Categoria inválido");
        }
    }
    RevisarInvariantes() {
        if (typeof this.id !== "number" || this.id <= 0) {
            throw new Error("Invariante fallida: id debe ser positivo");
        }
        if (!["Pendiente", "En revision", "Resuelto", "Rechazado"].includes(this.estado)) {
            throw new Error("Invariante fallida: estado inválido");
        }
    }
    BorraEnBaseDeDatosReporte() {
        //Aqui estaria la API para borrarlo en la base de datos
        return true
    }
    HistorialDeReportes(UsuarioId) {
        /*Aqui se introduce la Id del usuario para buscar todos los reportes hechos por el, si el usuario 
        no tiene historial como atributo entonces se busca todos los reportes con esa Id de usuario*/
        return true
    }
}