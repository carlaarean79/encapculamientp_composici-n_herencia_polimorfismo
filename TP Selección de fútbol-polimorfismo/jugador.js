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
exports.Jugador = void 0;
var seleccion_1 = require("./seleccion");
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(idTshirt, nameLastname, numPasaport, birthDate, contractExpiration, salario, posicion, equipoPerteneciente, estadoFisico) {
        var _this = _super.call(this, idTshirt, nameLastname, numPasaport, birthDate, contractExpiration, salario) || this;
        _this.posicion = posicion;
        _this.equipoPerteneneciente = equipoPerteneciente;
        _this.estadoFisico = estadoFisico;
        return _this;
    }
    Jugador.prototype.setPosicion = function (posicion) {
        this.posicion = posicion;
    };
    Jugador.prototype.getPosicion = function () {
        return this.posicion;
    };
    Jugador.prototype.setEquipoPerteneciente = function (equipoPertenece) {
        this.equipoPerteneneciente = equipoPertenece;
    };
    Jugador.prototype.getEquipoPerteneciente = function () {
        return this.equipoPerteneneciente;
    };
    Jugador.prototype.setEstadoFisico = function (estadoFisico) {
        this.estadoFisico = estadoFisico;
    };
    Jugador.prototype.getEstadoFisico = function () {
        return this.estadoFisico;
    };
    Jugador.prototype.aptoJuego = function () {
        if (this.estadoFisico === true) {
            return "Puede Jugar";
        }
        else {
            return "Rehabilitación";
        }
    };
    Jugador.prototype.aumentoSalario = function () {
        if (this.renewContract() === "Contrato renovado") {
            return this.salario + 15000;
        }
        else {
            return "No hubo acuerdo";
        }
    };
    return Jugador;
}(seleccion_1.SeleccionArgentina));
exports.Jugador = Jugador;
