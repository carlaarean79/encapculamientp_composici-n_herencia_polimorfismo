"use strict";
exports.__esModule = true;
exports.ListadoDeLibros = void 0;
var ListadoDeLibros = /** @class */ (function () {
    function ListadoDeLibros(paramTitulo, paramAutor, paramTematica, paramEditorial) {
        this.titulo = paramTitulo;
        this.autor = paramAutor;
        this.tematica = paramTematica;
    }
    ListadoDeLibros.prototype.setTitulo = function (paramTitulo) {
        this.titulo = paramTitulo;
    };
    ListadoDeLibros.prototype.getTitulo = function () {
        return this.titulo;
    };
    ListadoDeLibros.prototype.setAutor = function (paranAutor) {
        this.autor = paranAutor;
    };
    ListadoDeLibros.prototype.getAutor = function () {
        return this.autor;
    };
    ListadoDeLibros.prototype.setTematica = function (paramtematica) {
        this.tematica = paramtematica;
    };
    ListadoDeLibros.prototype.getTematica = function () {
        return this.tematica;
    };
    return ListadoDeLibros;
}());
exports.ListadoDeLibros = ListadoDeLibros;
