import {Curso} from "./models/curso";
import {Estudiante} from "./models/estudiante";
import {LISTA_CURSOS} from "./mock/curso.mock"

var nombre: string = "Fernando";
console.log(`Buenos dias ${nombre}`);

let listaTareas: string[] = ["Hola", "Mundo"];

let valores: (string | boolean)[] = ["hola", true];

enum Estados {
  "OK",
  "KO",
  "Pendiente",
}

let estadoTareaUno: Estados = Estados.KO;

//Interfaces

interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}

let tareaDos: Tarea = {
  nombre: "tarea dos",
  estado: Estados.Pendiente,
  urgencia: 10,
};

//Types of TypeScript
type Producto = {
  precio: number;
  name: string;
};

let prodUno: Producto = {
  precio: 10,
  name: "Camiseta",
};

console.log(prodUno);
console.log(prodUno.name);
console.log(
  prodUno.precio > 15
    ? `El producto ${prodUno.name} tiene gastos de envios gratuitos`
    : `El producto ${prodUno.name} tiene ${
        prodUno.precio * 0.5
      } euros de gastos de envio`
);

//Bucles

let listaTareaNueva: Tarea[] = [
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
listaTareaNueva.forEach((tarea: Tarea, index: number) => {
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

let listaLunes: string[] = ["pan", "leche"];
let listaMartes: string[] = [...listaLunes, "cacao"];
let listaViernes: string[] = ["cerveza"];

let listaFinal: string[] = [...listaLunes, ...listaViernes];
console.log(listaFinal);


/**
 * *Functions
 */



function ejemplo(name:string, surname:string): string{
  return (`Hello ${name} ${surname}`)
}

const fullName= ejemplo('Fer', 'Baeza')

console.log(fullName)


/**
 * @param nombres es una lista de nombres
 */

function ejMultiParams(...names: string[]){
  names.forEach((n) =>{
    console.log(n)
  });
}

const newNames: string[] = ['Lau' , 'Ana']
ejMultiParams('fer', 'vic', 'luc')
ejMultiParams(...newNames,'fer', 'vic', 'luc')




function ejMultiParamsTwo(namesLista: string[]){
  namesLista.forEach((n) =>{
    console.log(n)
  });
}



const namesLista: string[]=['nando', 'pili']
ejMultiParamsTwo(namesLista)

/**
 * *Siempre es mejor a la hora de crear un objeto definirlo con un type, que es similar al interface
 * *a la hora de crear el objeto le decimos que es de tipo typeCreado asi podremos acceder a los atributos declarados
 */


//Arrow Funt
type Empleado={
  empName:string,
  empSurname:string,
  empAge:number
}

let empleadoFer:Empleado ={
  empName: 'Fer',
  empSurname:'Baeza',
  empAge:40
}

const showEmp = (empleado:Empleado): string=> `${empleado.empName} ${empleado.empSurname} tiene ${empleado.empAge} anyos`;

console.log(showEmp(empleadoFer))



//Asyn Func

async function ejAsync():Promise<string> {
  await console.log('Tarea asincrona')
  console.log('Tarea completa')
  return "Tarea Ok Finalizada"
}

ejAsync().then((res)=>{
  console.log("Respuesta", res);
}).catch((error)=>{
  console.log("Ha Fallado", error);
}).finally(()=>"End")

/**
 * *CLASES
 */




// const cursoTs = new Curso('TypeScript', 16);
// const cursoJs = new Curso('JavaScript', 36);

//const listaCursos:Curso[]=[];
//listaCursos.push(cursoJs, cursoTs);
/**Usando el Mock */

const listaCursos:Curso[]= LISTA_CURSOS;
const fer : Estudiante= new Estudiante('Fernando', listaCursos, 'Baeza')
console.log(`El alumno ${fer.nombreEstudiante} esta apuntado a`)
fer.cursos.forEach((curso)=>{
  console.log(` - ${curso.nombre} que tiene ${curso.horas} horas`)
})
const cursoAngular = new Curso('Angular', 86);

fer.cursos.push(cursoAngular);

console.log(`El alumno ${fer.nombreEstudiante} esta apuntado a`)
fer.cursos.forEach((curso)=>{
  console.log(` . ${curso.nombre} que tiene ${curso.horas} horas`)
})

console.log(fer.horasEstudiadas)
const horasFer:number = fer.horasEstudiadas
console.log(`El estudiante ${fer.idEst} lleva ${fer.horasEstudiadas} horas`)