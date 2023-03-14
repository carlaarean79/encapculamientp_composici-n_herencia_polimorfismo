"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(pGanador, pPremio) {
        this.ganador = pGanador;
        this.premio = pPremio;
    }
    Casino.prototype.setGanador = function (pGanador) {
        this.ganador = pGanador;
    };
    Casino.prototype.getGanador = function () {
        return this.ganador;
    };
    Casino.prototype.setPagarPremio = function (pPremio) {
        this.premio = pPremio;
    };
    Casino.prototype.getPagarPremio = function () {
        return this.premio;
    };
    return Casino;
}());
exports.Casino = Casino;
