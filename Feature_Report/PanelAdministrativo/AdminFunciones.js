/*
Como sera a partir de la pagina que se va a tener estas funciones entonces se debe de vincular los botones 
u otro widget que activa alguna fucionalidad para llamar las funciones de este script
*/

async function VerUsuarios() {
    try {
        const response = await fetch("http://localhost/api/usuarios.php?action=listar");

        if (!response.ok) {
            throw new Error("Error en la petición: " + response.status);
        }

        const usuarios = await response.json(); // convierte la respuesta en JSON
        console.log(usuarios); // aquí tienes la lista de usuarios

        return usuarios; // devuelve el JSON para usarlo en otro lugar
    } catch (error) {
        console.error("Hubo un problema al obtener los usuarios:", error);
        return null;
    }
}

async function verReportes() {
    try {
        const response = await fetch("http://localhost/api/denuncias.php?action=listar");

        if (!response.ok) {
            throw new Error("Error en la petición: " + response.status);
        }

        const reportes = await response.json();
        console.log(reportes);

        return reportes;
    } catch (error) {
        console.error("Hubo un problema al obtener los reportes:", error);
        return null;
    }
}
/*function EditarUsuario(Id, atributo, NuevoDato) { 
    if BaseDeDatos.Id.includes(Id) {
        Usuario = BaseDedatos[BaseDeDatos.Id.indexOf(Id)]
        Usuario.atributo = NuevoDato
    } else {
        return `Usuario con ID ${Id} no encontrado.`;
    }
}*/

/*function ReescribirUsuario(Id, parametros)    
    if BaseDeDatos.Id.includes(Id) {
        Usuario = BaseDedatos[BaseDeDatos.Id.indexOf(Id)]
        new Usuario(parametros) = Usuario
    } else {
        return `Usuario con ID ${Id} no encontrado.`;
}
}*/

/*function editarEstadoReporte(Id, nuevoEstado) {
    let reporte = reportes.find(r => r.Id === Id);
    if (reporte) {
        reporte.estado = nuevoEstado;
    } else {
        return `Reporte con ID ${Id} no encontrado.`;
    }
}*/
