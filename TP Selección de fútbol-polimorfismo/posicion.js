"use strict";
exports.__esModule = true;
exports.Posicion = void 0;
var Posicion = /** @class */ (function () {
    function Posicion(numero, posicion, tipoDeJugada) {
        this.numero = numero;
        this.posicion = posicion;
        this.tipoDeJugada = tipoDeJugada;
    }
    Posicion.prototype.setNumeroDeCamiseta = function (numero) {
        this.numero = numero;
    };
    Posicion.prototype.getNumeroDeCamiseta = function () {
        return this.numero;
    };
    Posicion.prototype.setPosicion = function (posicion) {
        this.posicion = posicion;
    };
    Posicion.prototype.getPosicion = function () {
        return this.posicion;
    };
    Posicion.prototype.setFuncion = function (tipoDeJugada) {
        this.tipoDeJugada = tipoDeJugada;
    };
    Posicion.prototype.getFuncion = function () {
        return this.tipoDeJugada;
    };
    return Posicion;
}());
exports.Posicion = Posicion;
