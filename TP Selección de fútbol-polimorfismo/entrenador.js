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
exports.Entrenador = void 0;
var seleccion_1 = require("./seleccion");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(idTshirt, nameLastname, numPasaport, birthDate, contractExpiration, salario, equipoCompleto) {
        var _this = _super.call(this, idTshirt, nameLastname, numPasaport, birthDate, contractExpiration, salario) || this;
        _this.equipoCompleto = equipoCompleto;
        return _this;
    }
    Entrenador.prototype.organizarJugada = function () {
        if (this.equipoCompleto === true) {
            return "Organizar jugada defensiva";
        }
        else {
            return "Completar equipo";
        }
    };
    Entrenador.prototype.aumentoSalario = function () {
        if (this.renewContract() === "Contrato renovado") {
            return this.salario + 5000;
        }
        else {
            return "No hubo acuerdo";
        }
    };
    return Entrenador;
}(seleccion_1.SeleccionArgentina));
exports.Entrenador = Entrenador;
