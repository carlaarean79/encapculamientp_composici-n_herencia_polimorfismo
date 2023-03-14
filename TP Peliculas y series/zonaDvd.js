"use strict";
exports.__esModule = true;
exports.Alquiler = void 0;
var peliculas_1 = require("./peliculas");
var series_1 = require("./series");
var socio_1 = require("./socio");
var Alquiler = /** @class */ (function () {
    function Alquiler(paramSocio, paramPeliculas, paramSeries) {
        this.socio = paramSocio;
        this.pelis = paramPeliculas;
        this.series = paramSeries;
    }
    Alquiler.prototype.setSocio = function (paramSocio) {
        this.socio = paramSocio;
    };
    Alquiler.prototype.getSocio = function () {
        return this.socio;
    };
    Alquiler.prototype.setPelis = function (paramPelis) {
        this.pelis = paramPelis;
    };
    Alquiler.prototype.getPelis = function () {
        return this.pelis;
    };
    Alquiler.prototype.setSeries = function (paramSeries) {
        this.series = paramSeries;
    };
    Alquiler.prototype.getSeries = function () {
        return this.series;
    };
    return Alquiler;
}());
exports.Alquiler = Alquiler;
var serie0156 = new series_1.Series("The last of uf", "Pedro Pascal,Bella Ramsey", "Neil Druckmann", "Apocalíptico", "15-01-2023");
console.log(serie0156);
var peli0345 = new peliculas_1.Peliculas("Merlina", "Jenna Ortega,Emma Myers,Percy Hynes", "Dany Elfam,Chris Bacon", "Fantasía,Comedia de terror", "23-11-2022", "18");
console.log(peli0345);
var accesoAsocio = new socio_1.Socio("Rocio, Almada", "Reconquista 45", "27821713");
console.log(accesoAsocio);
var alquiler = new Alquiler(accesoAsocio, peli0345, serie0156);
/* console.log(alquiler);
 */
