import { ListadoDeLibros } from "./libros";
import { Socios } from "./socios";

export class Biblioteca {
    private socios : Socios;
    private libros : ListadoDeLibros;
    
    constructor(paramSocios:Socios, paramLibros: ListadoDeLibros){
        this.libros = paramLibros;
        this.socios = paramSocios
    }
    public setLibros(paramLibros:ListadoDeLibros):void{
        this.libros = paramLibros;
    }
    public getLibros():ListadoDeLibros{
        return this.libros;
    }
    public setSocios(paramSocios:Socios):void{
        this.socios = paramSocios;
    }
    public getSocios():Socios{
        return this.socios;
    }
}
let libro01A : ListadoDeLibros = new ListadoDeLibros("Harry Potter y la piedra Filosofal", "j.K Rowling","Magia","Bloomsbury Salamandra Scholastic");
let socio001 : Socios =new Socios("Carla","Arean",27821713);
let biblioteca06032023 : Biblioteca = new Biblioteca(socio001,libro01A);
 console.log(biblioteca06032023); 