export class Peliculas{
    private titulo:string;
    private protagonistas:string;
    private director:string;
    private genero:string;
    private fechaDeEstreno:string;
    private atp:string;
constructor(paramTitulo:string,paramProtagonistas:string,paramDirector:string,paramGenero:string,paramFechaDeEstreno:string,paramAtp?:string){
    this.titulo = paramTitulo;
    this.protagonistas = paramProtagonistas;
    this.director = paramDirector;
    this.genero =paramGenero;
    this.fechaDeEstreno = paramFechaDeEstreno;
    if(this.atp == undefined){
        this.atp = "Apta para Todo Público";
       }else {
        this.atp = `Apta para mayores de ${paramAtp}`;
       }
}
public setTitulo(paramTitulo:string):void{
    this.titulo = paramTitulo;
}
public getTitulo():string{
    return this.titulo;
}
public setProtagonistas(paramProtagonistas:string):void{
    this.protagonistas = paramProtagonistas;
}
public getProtagonistas():string{
    return this.protagonistas;
}
public setDirector(paramDirector:string):void{
    this.director = paramDirector;
}
public getDirector():string{
    return this.director;
}
public setGenero(paramGenero:string):void{
    this.genero = paramGenero;
}
public getGenero():string{
    return this.genero;
}
public setFechaDeEstreno(paramFechaDeEstreno:string):void{
    this.fechaDeEstreno = paramFechaDeEstreno;
}
public getFechaDeEstreno():string{
    return this.fechaDeEstreno;
}
public setAtp(paramAtp:string):void{
    this.atp = paramAtp;
}
public getAtp():string{
    return this.atp;
}
}