/**
Enumeración de estados de un reporte.
@readonly
@enum {string}
*/
export const ReportStatus = Object.freeze({
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed"
});

/**
@typedef {Object} ReportAttachment
@property {string} type - "photo" | "video"
@property {string} url - URL o ruta interna del archivo
 */

/**
 @typedef {Object} ReportData
 @property {string} title
 @property {string} description
 @property {ReportAttachment[]} attachments
 @property {string} citizenId - Identificador del ciudadano que envía el reporte
*/

/**
@typedef {Object} ReportResponse
@property {string} responder
@property {string} message
@property {Date} date
*/

/**
Contrato de dominio para manejar reportes en una institución.
Representa las reglas que toda institución debe cumplir.
 */
export class InstitutionReportContract {
  
  /**
  Recibir un nuevo reporte emitido hacia esta institución.
  @param {ReportData} reportData
  @returns {string} Report ID
   */
  receiveReport(reportData) {
    throw new Error("Method not implemented: receiveReport()");
  }

  /**
  Agregar una respuesta al reporte.
  @param {string} reportId
  @param {ReportResponse} response
  */
  respondToReport(reportId, response) {
    throw new Error("Method not implemented: respondToReport()");
  }

  /**
  Cambiar el estado del reporte (pendiente, en proceso, finalizado).
  @param {string} reportId
  @param {ReportStatus} status
  */
  updateReportStatus(reportId, status) {
    throw new Error("Method not implemented: updateReportStatus()");
  }

  /**
  Obtener el reporte completo con historial, respuestas y adjuntos.
  @param {string} reportId
  @returns {Object}
  */
  getReport(reportId) {
    throw new Error("Method not implemented: getReport()");
  }

  /**
  Listar todos los reportes que maneja la institución.
  @returns {Object[]}
  */
  listReports() {
    throw new Error("Method not implemented: listReports()");
  }
}
