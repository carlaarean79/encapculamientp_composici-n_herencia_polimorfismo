"use strict";
exports.__esModule = true;
exports.SeleccionArgentina = void 0;
var SeleccionArgentina = /** @class */ (function () {
    function SeleccionArgentina(idTshirt, nameLastname, numPasaport, birthDate, contractExpiration, salario) {
        this.idTshirt = idTshirt;
        this.nameLastname = nameLastname;
        this.numPasaport = numPasaport;
        this.birthDate = birthDate;
        this.contractExpiration = contractExpiration;
        this.salario = salario;
    }
    SeleccionArgentina.prototype.setIdTshirt = function (idTshirt) {
        this.idTshirt = idTshirt;
    };
    SeleccionArgentina.prototype.getIdTshirt = function () {
        return this.idTshirt;
    };
    SeleccionArgentina.prototype.setNameLastName = function (nameLastname) {
        this.nameLastname = nameLastname;
    };
    SeleccionArgentina.prototype.getNameLastName = function () {
        return this.nameLastname;
    };
    SeleccionArgentina.prototype.setNumPasaport = function (numPasaport) {
        this.numPasaport = numPasaport;
    };
    SeleccionArgentina.prototype.getNumPasaport = function () {
        return this.numPasaport;
    };
    SeleccionArgentina.prototype.setBirthDate = function (birthDate) {
        this.birthDate = birthDate;
    };
    SeleccionArgentina.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    SeleccionArgentina.prototype.setContractExpiration = function (contractExpiration) {
        this.contractExpiration = contractExpiration;
    };
    SeleccionArgentina.prototype.getContractEspiration = function () {
        return this.contractExpiration;
    };
    SeleccionArgentina.prototype.setSalario = function (salario) {
        this.salario = salario;
    };
    SeleccionArgentina.prototype.getSalario = function () {
        return this.salario;
    };
    SeleccionArgentina.prototype.renewContract = function () {
        var aux = 2023;
        if (this.contractExpiration <= aux) {
            return "Iniciar negociación de renovación de contrato";
        }
        else {
            return "Contrato renovado";
        }
    };
    SeleccionArgentina.prototype.aumentoSalario = function () {
        if (this.renewContract() === "Contrato renovado") { //según el método renewContract y de acuerdo al atributo salario
            return this.salario++; //devuelve un valor lógico según la condición especificada
        }
        else {
            return "No hubo acuerdo";
        }
    };
    return SeleccionArgentina;
}());
exports.SeleccionArgentina = SeleccionArgentina;
