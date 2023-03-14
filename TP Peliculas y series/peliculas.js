"use strict";
exports.__esModule = true;
exports.Peliculas = void 0;
var Peliculas = /** @class */ (function () {
    function Peliculas(paramTitulo, paramProtagonistas, paramDirector, paramGenero, paramFechaDeEstreno, paramAtp) {
        this.titulo = paramTitulo;
        this.protagonistas = paramProtagonistas;
        this.director = paramDirector;
        this.genero = paramGenero;
        this.fechaDeEstreno = paramFechaDeEstreno;
        if (this.atp == undefined) {
            this.atp = "Apta para Todo Público";
        }
        else {
            this.atp = "Apta para mayores de ".concat(paramAtp);
        }
    }
    Peliculas.prototype.setTitulo = function (paramTitulo) {
        this.titulo = paramTitulo;
    };
    Peliculas.prototype.getTitulo = function () {
        return this.titulo;
    };
    Peliculas.prototype.setProtagonistas = function (paramProtagonistas) {
        this.protagonistas = paramProtagonistas;
    };
    Peliculas.prototype.getProtagonistas = function () {
        return this.protagonistas;
    };
    Peliculas.prototype.setDirector = function (paramDirector) {
        this.director = paramDirector;
    };
    Peliculas.prototype.getDirector = function () {
        return this.director;
    };
    Peliculas.prototype.setGenero = function (paramGenero) {
        this.genero = paramGenero;
    };
    Peliculas.prototype.getGenero = function () {
        return this.genero;
    };
    Peliculas.prototype.setFechaDeEstreno = function (paramFechaDeEstreno) {
        this.fechaDeEstreno = paramFechaDeEstreno;
    };
    Peliculas.prototype.getFechaDeEstreno = function () {
        return this.fechaDeEstreno;
    };
    Peliculas.prototype.setAtp = function (paramAtp) {
        this.atp = paramAtp;
    };
    Peliculas.prototype.getAtp = function () {
        return this.atp;
    };
    return Peliculas;
}());
exports.Peliculas = Peliculas;
