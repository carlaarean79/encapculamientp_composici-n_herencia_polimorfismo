import { SeleccionArgentina } from './seleccion';
export class Entrenador extends SeleccionArgentina{
    private equipoCompleto : boolean;
    public constructor(idTshirt:string,nameLastname:string,numPasaport:string,
        birthDate:string,contractExpiration:number,salario:number,equipoCompleto:boolean){
super(idTshirt,nameLastname,numPasaport,
    birthDate,contractExpiration,salario)
    this.equipoCompleto = equipoCompleto;
        }
        public organizarJugada(){           //método que devuelve un valor lógico según la condición
            if(this.equipoCompleto === true){
                return "Organizar jugada defensiva";
            }else{
                return "Completar equipo";
            }
        }
        public aumentoSalario() {            //método polimórfico que según la condición aumenta o no el salario
            if (this.renewContract() === "Contrato renovado") {
              return this.salario + 5000;
            } else {
              return "No hubo acuerdo";
            }
          }
}