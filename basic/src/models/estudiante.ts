import {Curso} from "./curso"

export class Estudiante{
    nombreEstudiante:string;
    apellido?:string;
    cursos: Curso[];

    private idEstudiante:string="3651650"
  
    constructor(nombreEstudiante:string,cursos:Curso[], apellido?:string){
      this.nombreEstudiante= nombreEstudiante;
      if(apellido){
        this.apellido= apellido;
      }
      this.cursos =cursos
    }
    get horasEstudiadas():number{
      let horasEstudiadas=0;
      this.cursos.forEach((curso:Curso)=>{
        horasEstudiadas+= curso.horas;
      })
      return horasEstudiadas
    }
    get idEst():string {
      return this.idEstudiante
    }
  
  }
