"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Pocker = void 0;
var juegosdecasino_1 = require("./juegosdecasino"); //se importa la super clase y
var Pocker = /** @class */ (function (_super) {
    __extends(Pocker, _super);
    function Pocker(//se crea el constructor del obj. donde se inicialiazan todas las variables
    paramMesa, //internas asignando un parámetro para cada una
    paramApuesta, paramJugadores, pMesaCompleta, pGanador) {
        var _this = _super.call(this, paramMesa, paramApuesta, paramJugadores) || this;
        _this.mesaCompleta = pMesaCompleta;
        _this.gano = pGanador;
        return _this;
    }
    Pocker.prototype.setMesaCompleta = function (pMesaCompleta) {
        this.mesaCompleta = pMesaCompleta; //cada atributo
    };
    Pocker.prototype.getMesaCompleta = function () {
        return this.mesaCompleta;
    };
    Pocker.prototype.setGanador = function (pGanador) {
        this.gano = pGanador;
    };
    Pocker.prototype.getGanador = function () {
        return this.gano;
    };
    return Pocker;
}(juegosdecasino_1.JuegoDeCasino));
exports.Pocker = Pocker;
