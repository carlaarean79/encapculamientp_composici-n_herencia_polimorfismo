"use strict";
exports.__esModule = true;
exports.Biblioteca = void 0;
var libros_1 = require("./libros");
var socios_1 = require("./socios");
var Biblioteca = /** @class */ (function () {
    function Biblioteca(paramSocios, paramLibros) {
        this.libros = paramLibros;
        this.socios = paramSocios;
    }
    Biblioteca.prototype.setLibros = function (paramLibros) {
        this.libros = paramLibros;
    };
    Biblioteca.prototype.getLibros = function () {
        return this.libros;
    };
    Biblioteca.prototype.setSocios = function (paramSocios) {
        this.socios = paramSocios;
    };
    Biblioteca.prototype.getSocios = function () {
        return this.socios;
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
var libro01A = new libros_1.ListadoDeLibros("Harry Potter y la piedra Filosofal", "j.K Rowling", "Magia", "Bloomsbury Salamandra Scholastic");
var socio001 = new socios_1.Socios("Carla", "Arean", 27821713);
var biblioteca06032023 = new Biblioteca(socio001, libro01A);
console.log(biblioteca06032023);
biblioteca06032023.getSocios();
