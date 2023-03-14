"use strict";
exports.__esModule = true;
exports.Series = void 0;
var Series = /** @class */ (function () {
    function Series(paramTitulo, paramProtagonistas, paramDirector, paramGenero, paramFechaDeEstreno, paramAtp) {
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
    Series.prototype.setTitulo = function (paramTitulo) {
        this.titulo = paramTitulo;
    };
    Series.prototype.getTitulo = function () {
        return this.titulo;
    };
    Series.prototype.setProtagonistas = function (paramProtagonistas) {
        this.protagonistas = paramProtagonistas;
    };
    Series.prototype.getProtagonistas = function () {
        return this.protagonistas;
    };
    Series.prototype.setDirector = function (paramDirector) {
        this.director = paramDirector;
    };
    Series.prototype.getDirector = function () {
        return this.director;
    };
    Series.prototype.setGenero = function (paramGenero) {
        this.genero = paramGenero;
    };
    Series.prototype.getGenero = function () {
        return this.genero;
    };
    Series.prototype.setFechaDeEstreno = function (paramFechaDeEstreno) {
        this.fechaDeEstreno = paramFechaDeEstreno;
    };
    Series.prototype.getFechaDeEstreno = function () {
        return this.fechaDeEstreno;
    };
    Series.prototype.setAtp = function (paramAtp) {
        this.atp = paramAtp;
    };
    Series.prototype.getAtp = function () {
        return this.atp;
    };
    return Series;
}());
exports.Series = Series;
