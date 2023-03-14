export class Socio{
    private nombreApellido: string;
    private direccion: string;
    private numSocio: string
    constructor(paramDatos:string,paramDireccion:string,paramNumSocio:string){
        this.nombreApellido = paramDatos;
        this.direccion = paramDireccion;
        this.numSocio = paramNumSocio;
    }
    public setDatos(paramDatos:string):void{
        this.nombreApellido = paramDatos;
    }
    public getDatos():string{
        return this.nombreApellido;
    }
    public setDireccion(paramDireccion:string):void{
        this.direccion = paramDireccion;
    }
    public getDireccion():string{
        return this.direccion;
    }
    public setNumSocio(paramNumSocio:string):void{
        this.numSocio = paramNumSocio;
    }
    public getNumSocio():string{
        return this.numSocio;
    }
}