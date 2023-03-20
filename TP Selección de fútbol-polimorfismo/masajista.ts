import { SeleccionArgentina } from "./seleccion";
import { Jugador } from './jugador';
export class Masajista extends SeleccionArgentina {
  private especialidad: string;
  public constructor(
    idTshirt: string,
    nameLastname: string,
    numPasaport: string,
    birthDate: string,
    contractExpiration: number,salario:number,especialidad:string
  ) {
    super(idTshirt, nameLastname, numPasaport, birthDate, contractExpiration,salario);
    this.especialidad = especialidad ;
  }
  public setEspecialidad(especialidad:string):void{
    this.especialidad = especialidad;
  }
  public getEspecialidad():string{
    return this.especialidad;
  }
  public realizarMasajes(){     //método que retorna un string 
    return this.especialidad = "Aplicar hielo y realizar masajes";
      }
      public aumentoSalario() {       //método polimórfico que según la condición aumenta o no el salario
        if (this.renewContract() === "Contrato renovado") {
          return this.salario + 500;
        } else {
          return "No hubo acuerdo";
        }
      }
    
  }

