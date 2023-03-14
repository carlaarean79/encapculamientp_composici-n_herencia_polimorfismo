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
exports.Ruleta = void 0;
var juegosdecasino_1 = require("./juegosdecasino");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(paramMesa, paramApuesta, paramJugadores, pMesa, pGano) {
        var _this = _super.call(this, paramMesa, paramApuesta, paramJugadores) || this;
        _this.mesaCompleta = pMesa;
        _this.gano = pGano;
        return _this;
    }
    Ruleta.prototype.setMesaCompleta = function (paramMesa) {
        this.mesaCompleta = paramMesa;
    };
    Ruleta.prototype.getMesaCompleta = function () {
        return this.mesaCompleta;
    };
    Ruleta.prototype.setGanador = function (paramGano) {
        this.gano = paramGano;
    };
    Ruleta.prototype.getGanador = function () {
        return this.gano;
    };
    Ruleta.prototype.setGirarLaRuleta = function (pMesaCompleta) {
        if (this.mesaCompleta == true) {
            "Gira la ruleta";
        }
    };
    return Ruleta;
}(juegosdecasino_1.JuegoDeCasino));
exports.Ruleta = Ruleta;
