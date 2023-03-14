export class ListadoDeLibros {
    private titulo: string;
    private autor : string;
    private tematica : string;
    private editorial : string;
    constructor(paramTitulo:string, paramAutor:string,paramTematica: string,paramEditorial:string){
        this.titulo = paramTitulo;
        this.autor = paramAutor;
        this.tematica = paramTematica;
    }
    public setTitulo(paramTitulo:string):void{
        this.titulo = paramTitulo;
    }
    public getTitulo():string{
        return this.titulo;
    }
    public setAutor(paranAutor:string):void{
        this.autor =paranAutor;
    }
    public getAutor():string{
        return this.autor;
    }
    public setTematica(paramtematica:string):void{
        this.tematica = paramtematica;
    }
    public getTematica():String{
        return this.tematica;
    }
}
