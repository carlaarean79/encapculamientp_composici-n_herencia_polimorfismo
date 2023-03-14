"use strict";
exports.__esModule = true;
exports.JuegoDeCasino = void 0;
var JuegoDeCasino = /** @class */ (function () {
    function JuegoDeCasino(paramMesa, paramApuesta, paramJugadores) {
        this.idMesa = paramMesa;
        this.apuestaMinima = paramApuesta;
        this.cantDeJugadores = paramJugadores;
    }
    JuegoDeCasino.prototype.setIdMesa = function (paramMesa) {
        this.idMesa = paramMesa;
    };
    JuegoDeCasino.prototype.getIdMesa = function () {
        return this.idMesa;
    };
    JuegoDeCasino.prototype.setApuestaMinima = function (paramApuesta) {
        this.apuestaMinima = paramApuesta;
    };
    JuegoDeCasino.prototype.getApuestaMinima = function () {
        return this.apuestaMinima;
    };
    JuegoDeCasino.prototype.setCantDeJugadores = function (paramJugadores) {
        this.cantDeJugadores = paramJugadores;
    };
    JuegoDeCasino.prototype.getCantDeJugaddores = function () {
        return this.cantDeJugadores;
    };
    return JuegoDeCasino;
}());
exports.JuegoDeCasino = JuegoDeCasino;
