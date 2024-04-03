"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    constructor(nombreEstudiante, cursos, apellido) {
        this.idEstudiante = "3651650";
        this.nombreEstudiante = nombreEstudiante;
        if (apellido) {
            this.apellido = apellido;
        }
        this.cursos = cursos;
    }
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    get idEst() {
        return this.idEstudiante;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=estudiante.js.map