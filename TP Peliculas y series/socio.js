"use strict";
exports.__esModule = true;
exports.Socio = void 0;
var Socio = /** @class */ (function () {
    function Socio(paramDatos, paramDireccion, paramNumSocio) {
        this.nombreApellido = paramDatos;
        this.direccion = paramDireccion;
        this.numSocio = paramNumSocio;
    }
    Socio.prototype.setDatos = function (paramDatos) {
        this.nombreApellido = paramDatos;
    };
    Socio.prototype.getDatos = function () {
        return this.nombreApellido;
    };
    Socio.prototype.setDireccion = function (paramDireccion) {
        this.direccion = paramDireccion;
    };
    Socio.prototype.getDireccion = function () {
        return this.direccion;
    };
    Socio.prototype.setNumSocio = function (paramNumSocio) {
        this.numSocio = paramNumSocio;
    };
    Socio.prototype.getNumSocio = function () {
        return this.numSocio;
    };
    return Socio;
}());
exports.Socio = Socio;
