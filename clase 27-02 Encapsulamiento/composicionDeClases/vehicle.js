"use strict";
exports.__esModule = true;
exports.Vehicle = void 0;
//se importan las clases creada por fuera de la calse vehicle
var engine_1 = require("./engine");
var tyre_1 = require("./tyre");
//se crea la clase vehicle con sus respectivas variables internas con modificador private 
//ya que lo que nos importa es acceder a los valores de las funciones
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, engine, tyre) {
        this.make = make;
        this.model = model;
        this.engine = engine;
        this.tyre = tyre;
    }
    //con metodo get muestra los datos
    Vehicle.prototype.getDataVehicle = function () {
        console.log("\n    -----------------------\n      DATOS DEL VEHICULO\n    -----------------------\n    MARCA   :".concat(this.make, "\n    MODELO  :").concat(this.model, "\n    MOTOR   :").concat(this.engine, "\n    RODADO  :").concat(this.tyre, "\n    -----------------------\n    "));
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
//SE CREAN LAS NUEVAS INSTANCIAS de las clases Engine y Tyre
var myEngine = new engine_1.Engine("2.0");
var myTyre = [new tyre_1.Tyre(16), new tyre_1.Tyre(16), new tyre_1.Tyre(16), new tyre_1.Tyre(16)];
//se crea la nueva instacia de vehicle y por parametro se pasan las clase Engine y Tyre
var myCar = new Vehicle("Toyota", "2017", myEngine, myTyre);
myCar.getDataVehicle();
