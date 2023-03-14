import { Telefono } from "./telefono";

export default class TelefonoConRadio extends Telefono{
    private frecuenciaActual: number;
    constructor(paramFrecuencia:number){
        super();
        this.frecuenciaActual = paramFrecuencia;
    }
    public verFrecuencia():void{

    }
}