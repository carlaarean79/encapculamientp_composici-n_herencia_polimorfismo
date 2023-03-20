import { SeleccionArgentina } from "./seleccion";
import { Posicion } from "./posicion";
import { Masajista } from "./masajista";
export class Jugador extends SeleccionArgentina {
  private posicion: Posicion;
  private equipoPerteneneciente: string;
  private estadoFisico:boolean;

  public constructor(
    idTshirt: string,
    nameLastname: string,
    numPasaport: string,
    birthDate: string,
    contractExpiration: number,
    salario:number,
    posicion: Posicion,
    equipoPerteneciente: string,estadoFisico:boolean
  ) {
    super(idTshirt, nameLastname, numPasaport, birthDate, contractExpiration,salario);
    this.posicion = posicion;
    this.equipoPerteneneciente = equipoPerteneciente;
    this.estadoFisico = estadoFisico;
  }
  public setPosicion(posicion: Posicion): void {
    this.posicion = posicion;
  }
  public getPosicion(): Posicion {
    return this.posicion;
  }
  public setEquipoPerteneciente(equipoPertenece: string): void {
    this.equipoPerteneneciente = equipoPertenece;
  }
  public getEquipoPerteneciente(): string {
    return this.equipoPerteneneciente;
  }
  public setEstadoFisico(estadoFisico:boolean):void{
    this.estadoFisico = estadoFisico;
  }
  public getEstadoFisico():boolean{
    return this.estadoFisico;
  }
  public aptoJuego(){
    if(this.estadoFisico === true){
      return "Puede Jugar";
    }else{
      return "Rehabilitación";
    }
  }
  public aumentoSalario() {
    if (this.renewContract() === "Contrato renovado") {
      return this.salario + 15000;
    } else {
      return "No hubo acuerdo";
    }
  }
}


