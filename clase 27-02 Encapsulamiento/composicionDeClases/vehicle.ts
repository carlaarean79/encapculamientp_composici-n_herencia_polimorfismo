"use strict"
//se importan las clases creada por fuera de la calse vehicle
import { Engine } from './engine';
import { Tyre } from './tyre';
//se crea la clase vehicle con sus respectivas variables internas con modificador private 
//ya que lo que nos importa es acceder a los valores de las funciones
export class Vehicle{
    private make:string;
    private model:string;
    private engine:Engine; //se le asigna como tipo la clase Engine creada en el archivo engine
    private tyre: Tyre[];//se le asigna como tipo la clase Tyre creada en el archivo tyre y se le dice que lo devuelva como arreglo de obj
public constructor(make:string,model:string,engine:Engine, tyre:Tyre[]){
    this.make = make;
    this.model =model;
    this.engine = engine;
    this.tyre = tyre;
}
//con metodo get muestra los datos
public getDataVehicle():void{
    console.log(`
    -----------------------
      DATOS DEL VEHICULO
    -----------------------
    MARCA   :${this.make}
    MODELO  :${this.model}
    MOTOR   :${this.engine}
    RODADO  :${this.tyre}
    -----------------------
    `);
}
}
//SE CREAN LAS NUEVAS INSTANCIAS de las clases Engine y Tyre
const myEngine = new Engine("2.0");
const myTyre :Tyre[] = [new Tyre(16), new Tyre(16), new Tyre(16), new Tyre(16)];
//se crea la nueva instacia de vehicle y por parametro se pasan las clase Engine y Tyre
const myCar = new Vehicle("Toyota","2017",myEngine,myTyre);
myCar.getDataVehicle();
