class Reporte {
    // Método para actualizar el estado del reporte
    actualizarEstado(nuevoEstado) {
        const estadosValidos = ["pendiente", "en revisión", "resuelto", "rechazado"];
        if (estadosValidos.includes(nuevoEstado)) {
            this.estado = nuevoEstado;
        } else {
            throw new Error("Estado inválido");
        }
    }

    // Método para mostrar el reporte en formato legible
    mostrarReporte() {
        return `
    📋 Reporte #${this.id}
    Usuario_ID: ${this.Usuario_ID}
    Categoria: ${this.Categoria}
    Descripción: ${this.descripcion}
    Fecha: ${this.fecha.toLocaleString()}
    Estado: ${this.estado}
    `;
    }

    // Método para validar que los campos esenciales estén completos
    validar() {
        if (!this.Usuario_ID || !this.Categoria || !this.descripcion) {
            return false;
        }
        return true;
    }
    _checkInvariants() {
        if (typeof this.id !== "number" || this.id <= 0) {
            throw new Error("Invariante fallida: id debe ser positivo");
        }
        if (!["pendiente", "en revisión", "resuelto", "rechazado"].includes(this.estado)) {
            throw new Error("Invariante fallida: estado inválido");
        }
    }
}