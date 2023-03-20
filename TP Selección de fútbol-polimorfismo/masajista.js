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
exports.Masajista = void 0;
var seleccion_1 = require("./seleccion");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(idTshirt, nameLastname, numPasaport, birthDate, contractExpiration, salario, especialidad) {
        var _this = _super.call(this, idTshirt, nameLastname, numPasaport, birthDate, contractExpiration, salario) || this;
        _this.especialidad = especialidad;
        return _this;
    }
    Masajista.prototype.setEspecialidad = function (especialidad) {
        this.especialidad = especialidad;
    };
    Masajista.prototype.getEspecialidad = function () {
        return this.especialidad;
    };
    Masajista.prototype.realizarMasajes = function () {
        return this.especialidad = "Aplicar hielo y realizar masajes";
    };
    Masajista.prototype.aumentoSalario = function () {
        if (this.renewContract() === "Contrato renovado") {
            return this.salario + 500;
        }
        else {
            return "No hubo acuerdo";
        }
    };
    return Masajista;
}(seleccion_1.SeleccionArgentina));
exports.Masajista = Masajista;
