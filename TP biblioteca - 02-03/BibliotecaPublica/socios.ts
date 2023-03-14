export class Socios{
    private nombre:string;
    private apellido: string;
    private dni : number;
    constructor(paramNombre:string, paramApellido:string,paramDni: number){
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.dni = paramDni;
    }
    public setNombre(paramNombre:string):void{
        this.nombre = paramNombre;
    }
    public getNombre():string{
        return this.nombre;
    }
    public setApellido(paranApellido:string):void{
        this.apellido =paranApellido;
    }
    public getApellido():string{
        return this.apellido;
    }
    public setDni(paramDni:number):void{
        this.dni = paramDni;
    }
    public getDni():number{
        return this.dni;
    }
}
