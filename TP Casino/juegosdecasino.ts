export class JuegoDeCasino {//super clase//padre
   protected idMesa: number;
   protected apuestaMinima: number;
   protected cantDeJugadores: number;

    public constructor(paramMesa:number,paramApuesta:number,paramJugadores:number){
       this.idMesa = paramMesa;
       this.apuestaMinima = paramApuesta;
       this.cantDeJugadores = paramJugadores;
    }
    public setIdMesa(paramMesa:number):void{
        this.idMesa = paramMesa;
    }
    public getIdMesa():number{
        return this.idMesa;
    }
    public setApuestaMinima(paramApuesta:number):void{
        this.apuestaMinima = paramApuesta;
    }
    public getApuestaMinima():number{
        return this.apuestaMinima;
    }
    public setCantDeJugadores(paramJugadores:number):void{
        this.cantDeJugadores = paramJugadores;
    }
    public getCantDeJugaddores():number{
        return this.cantDeJugadores;
    }
}