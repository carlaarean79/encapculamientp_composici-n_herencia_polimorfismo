import { JuegoDeCasino } from "./juegosdecasino";
import { Casino } from "./casino";

export class Ruleta extends JuegoDeCasino {
  private mesaCompleta: boolean;
  private gano: Casino;

  public constructor(paramMesa:number,paramApuesta:number,paramJugadores:number,pMesa: boolean, pGano: Casino) {
      super(paramMesa,paramApuesta,paramJugadores);
    this.mesaCompleta = pMesa;
    this.gano = pGano;
  }
  public setMesaCompleta(paramMesa:boolean):void{
    this.mesaCompleta=paramMesa;
  }
  public getMesaCompleta():boolean{
    return this.mesaCompleta;
  }
  public setGanador(paramGano:Casino):void{
    this.gano = paramGano;
  }
  public getGanador():Casino{
    return this.gano;
  }
  public setGirarLaRuleta(pMesaCompleta: boolean) {
    if (this.mesaCompleta == true) {
      "Gira la ruleta";
    }
  }
}
