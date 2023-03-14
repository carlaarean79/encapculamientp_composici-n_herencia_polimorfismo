"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(paramEncencido, paramBateriaActual, paramEscribirMensaje, paramMarcarNumero) {
        this.estaPrendido = paramEncencido;
        if (this.estaPrendido == true) {
            "Ralizar llamada o enviar mensaje";
        }
        else {
            "Encender";
        }
        if (this.bateriaActual <= 25) {
            "Bater\u00EDa baja, recargar bater\u00EDa";
        }
        else {
            this.bateriaActual = paramBateriaActual;
        }
        this.escribirMensaje = paramEscribirMensaje;
        this.marcarNumero = paramMarcarNumero;
    }
    Telefono.prototype.setmandarMensaje = function (paramMensaje) {
        this.escribirMensaje = paramMensaje;
    };
    Telefono.prototype.getmandarMensaje = function () {
        return this.escribirMensaje;
    };
    Telefono.prototype.setHacerLlamada = function (paramLlamar) {
        this.marcarNumero = paramLlamar;
    };
    Telefono.prototype.getHacerLlamada = function () {
        return this.marcarNumero;
    };
    Telefono.prototype.setPrenderApagar = function (paramEncenApagar) {
        this.estaPrendido = paramEncenApagar;
    };
    Telefono.prototype.getPrenderApagar = function () {
        return this.estaPrendido;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
var telefonoTactil = new Telefono(true, 20, "Hola", 456235);
console.log(telefonoTactil);
