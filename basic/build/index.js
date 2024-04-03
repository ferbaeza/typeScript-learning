"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const curso_1 = require("./models/curso");
const estudiante_1 = require("./models/estudiante");
const curso_mock_1 = require("./mock/curso.mock");
console.log("Hello TS");
var nombre = "Fernando";
console.log(`Buenos dias ${nombre}`);
let a, b, c;
a = "TypeScript";
b = true;
c = 8;
let listaTareas = ["Hola", "Mundo"];
let valores = ["hola", true];
var Estados;
(function (Estados) {
    Estados[Estados["OK"] = 0] = "OK";
    Estados[Estados["KO"] = 1] = "KO";
    Estados[Estados["Pendiente"] = 2] = "Pendiente";
})(Estados || (Estados = {}));
let estadoTareaUno = Estados.KO;
let tareaDos = {
    nombre: "tarea dos",
    estado: Estados.Pendiente,
    urgencia: 10,
};
let prodUno = {
    precio: 10,
    name: "Camiseta",
};
console.log(prodUno);
console.log(prodUno.name);
console.log(prodUno.precio > 15
    ? `El producto ${prodUno.name} tiene gastos de envios gratuitos`
    : `El producto ${prodUno.name} tiene ${prodUno.precio * 0.5} euros de gastos de envio`);
//Bucles
let listaTareaNueva = [
    {
        nombre: "Tarea1",
        estado: Estados.OK,
        urgencia: 0,
    },
    {
        nombre: "Tarea2",
        estado: Estados.KO,
        urgencia: 1,
    },
    {
        nombre: "Tarea3",
        estado: Estados.Pendiente,
        urgencia: 0,
    },
    {
        nombre: "Tarea4",
        estado: Estados.Pendiente,
        urgencia: 3,
    },
];
//*Bucle For
//!Classic
console.log("For Classic ListaTareas");
for (let index = 0; index < listaTareaNueva.length; index++) {
    const tarea = listaTareaNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
}
//*Foreach mas potente
console.log("ForEach ListaTareas");
listaTareaNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
/**
 * Asginacion de variables
 */
let miLista = {
    title: "Monday",
    day: 4,
    state: "todo",
};
let myDay = miLista.day;
let myTitle = miLista.title;
let { day, state, title } = miLista;
let listaLunes = ["pan", "leche"];
let listaMartes = [...listaLunes, "cacao"];
let listaViernes = ["cerveza"];
let listaFinal = [...listaLunes, ...listaViernes];
console.log(listaFinal);
/**
 * *Functions
 */
function ejemplo(name, surname) {
    return (`Hello ${name} ${surname}`);
}
const fullName = ejemplo('Fer', 'Baeza');
console.log(fullName);
/**
 * @param nombres es una lista de nombres
 */
function ejMultiParams(...names) {
    names.forEach((n) => {
        console.log(n);
    });
}
const newNames = ['Lau', 'Ana'];
ejMultiParams('fer', 'vic', 'luc');
ejMultiParams(...newNames, 'fer', 'vic', 'luc');
function ejMultiParamsTwo(namesLista) {
    namesLista.forEach((n) => {
        console.log(n);
    });
}
const namesLista = ['nando', 'pili'];
ejMultiParamsTwo(namesLista);
let empleadoFer = {
    empName: 'Fer',
    empSurname: 'Baeza',
    empAge: 40
};
const showEmp = (empleado) => `${empleado.empName} ${empleado.empSurname} tiene ${empleado.empAge} anyos`;
console.log(showEmp(empleadoFer));
//Asyn Func
function ejAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log('Tarea asincrona');
        console.log('Tarea completa');
        return "Tarea Ok Finalizada";
    });
}
ejAsync().then((res) => {
    console.log("Respuesta", res);
}).catch((error) => {
    console.log("Ha Fallado", error);
}).finally(() => "End");
/**
 * *CLASES
 */
// const cursoTs = new Curso('TypeScript', 16);
// const cursoJs = new Curso('JavaScript', 36);
//const listaCursos:Curso[]=[];
//listaCursos.push(cursoJs, cursoTs);
/**Usando el Mock */
const listaCursos = curso_mock_1.LISTA_CURSOS;
const fer = new estudiante_1.Estudiante('Fernando', listaCursos, 'Baeza');
console.log(`El alumno ${fer.nombreEstudiante} esta apuntado a`);
fer.cursos.forEach((curso) => {
    console.log(` - ${curso.nombre} que tiene ${curso.horas} horas`);
});
const cursoAngular = new curso_1.Curso('Angular', 86);
fer.cursos.push(cursoAngular);
console.log(`El alumno ${fer.nombreEstudiante} esta apuntado a`);
fer.cursos.forEach((curso) => {
    console.log(` . ${curso.nombre} que tiene ${curso.horas} horas`);
});
console.log(fer.horasEstudiadas);
const horasFer = fer.horasEstudiadas;
console.log(`El estudiante ${fer.idEst} lleva ${fer.horasEstudiadas} horas`);
//# sourceMappingURL=index.js.map