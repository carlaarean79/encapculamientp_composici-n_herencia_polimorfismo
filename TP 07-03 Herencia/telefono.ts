export class Telefono {
  protected estaPrendido: boolean;
  protected bateriaActual: number;
  protected escribirMensaje: string;
  protected marcarNumero: number;

  constructor(
    paramEncencido: boolean,
    paramBateriaActual: number,
    paramEscribirMensaje: string,
    paramMarcarNumero: number
  ) {
  
    
      "Ralizar llamada o enviar mensaje": "Encender";
    
    if (this.bateriaActual <= 25) {
      `Batería baja, recargar batería`;
    } else {
      this.bateriaActual=paramBateriaActual;
    }
    this.escribirMensaje = paramEscribirMensaje;
    this.marcarNumero = paramMarcarNumero;
  }
  public setmandarMensaje(paramMensaje: string): void {
    this.escribirMensaje = paramMensaje;
  }

  public getmandarMensaje(): string {
    return this.escribirMensaje;
  }

  public setHacerLlamada(paramLlamar: number): void {
    this.marcarNumero = paramLlamar;
  }
  public getHacerLlamada(): number {
    return this.marcarNumero;
  }
  public setPrenderApagar(paramEncenApagar: boolean): void {
    this.estaPrendido = paramEncenApagar;
  }
  public getPrenderApagar(): boolean {
    return this.estaPrendido;
  }
}
const telefonoTactil: Telefono = new Telefono(true, 20, "Hola", 456235);
console.log(telefonoTactil);
