import { Peliculas } from "./peliculas";
import { Series } from "./series";
import { Socio } from './socio';

export class Alquiler{
    private socio:Socio;
    private pelis:Peliculas;
    private series :Series;

    constructor(paramSocio:Socio,paramPeliculas:Peliculas,paramSeries:Series){
        this.socio = paramSocio;
        this.pelis = paramPeliculas;
        this.series = paramSeries;
 }
 public setSocio(paramSocio:Socio):void{
    this.socio = paramSocio;
 }
 public getSocio():Socio{
    return this.socio;
 }
 public setPelis(paramPelis:Peliculas):void{
    this.pelis = paramPelis;
 }
 public getPelis():Peliculas{
    return this.pelis;
 }
 public setSeries(paramSeries:Series):void{
    this.series = paramSeries;
 }
 public getSeries():Series{
    return this.series;
 }

}
let serie0156 : Series = new Series("The last of uf","Pedro Pascal,Bella Ramsey","Neil Druckmann","Apocalíptico","15-01-2023");
 console.log(serie0156);
 let peli0345 : Peliculas = new Peliculas("Merlina","Jenna Ortega,Emma Myers,Percy Hynes","Dany Elfam,Chris Bacon","Fantasía,Comedia de terror","23-11-2022","18");
 console.log(peli0345);
 let accesoAsocio: Socio = new Socio("Rocio, Almada","Reconquista 45","27821713");
 console.log(accesoAsocio);
 let alquiler : Alquiler = new Alquiler(accesoAsocio,peli0345,serie0156);
/* console.log(alquiler);
 */

