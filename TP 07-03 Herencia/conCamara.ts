import { Telefono } from "./telefono";

export default class TelefonoConCamara extends Telefono{
   private resolucion : string;
   constructor(paramResolucion:string){
    super();
    this.resolucion = paramResolucion;
   }
    public sacarFotos(){

    }
}