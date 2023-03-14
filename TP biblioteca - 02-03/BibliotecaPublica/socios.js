"use strict";
exports.__esModule = true;
exports.Socios = void 0;
var Socios = /** @class */ (function () {
    function Socios(paramNombre, paramApellido, paramDni) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.dni = paramDni;
    }
    Socios.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    Socios.prototype.getNombre = function () {
        return this.nombre;
    };
    Socios.prototype.setApellido = function (paranApellido) {
        this.apellido = paranApellido;
    };
    Socios.prototype.getApellido = function () {
        return this.apellido;
    };
    Socios.prototype.setDni = function (paramDni) {
        this.dni = paramDni;
    };
    Socios.prototype.getDni = function () {
        return this.dni;
    };
    return Socios;
}());
exports.Socios = Socios;
