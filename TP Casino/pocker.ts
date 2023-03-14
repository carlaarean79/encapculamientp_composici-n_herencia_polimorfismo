import { JuegoDeCasino } from "./juegosdecasino";//se importa la super clase y
import { Casino } from "./casino";//la clase a utilizar para la composición

export class Pocker extends JuegoDeCasino {//se crea la clase Pocker que hereda todo de la 
  private mesaCompleta: boolean;// clase Juegos de casino
  private gano: Casino;//a su vez se crean dos atributos mas y a gano se le asigna la composición

  public constructor(//se crea el constructor del obj. donde se inicialiazan todas las variables
    paramMesa: number,//internas asignando un parámetro para cada una
    paramApuesta: number,
    paramJugadores: number,
    pMesaCompleta: boolean,
    pGanador: Casino
  ) {
    super(paramMesa, paramApuesta, paramJugadores);//se agrega la super clase con sus parámetros
    this.mesaCompleta = pMesaCompleta;
    this.gano = pGanador;

  }

  public setMesaCompleta(pMesaCompleta: boolean): void {//se crean métodos setter y getter para 
    this.mesaCompleta = pMesaCompleta;//cada atributo
  }
  public getMesaCompleta(): boolean {
    return this.mesaCompleta;
  }
  public setGanador(pGanador: Casino): void {
    this.gano = pGanador;
  }
  public getGanador(): Casino {
    return this.gano;
  }
  }



