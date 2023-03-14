"use strict";
exports.__esModule = true;
var ruleta_1 = require("./ruleta");
var pocker_1 = require("./pocker");
var casino_1 = require("./casino");
var casinoOpen = new casino_1.Casino(false, false);
var juegoRuleta = new ruleta_1.Ruleta(10, 2000, 8, true, casinoOpen);
console.log(juegoRuleta);
var juegoPocker = new pocker_1.Pocker(3, 5000, 6, true, casinoOpen);
console.log(juegoPocker);
console.log(juegoPocker.setCantDeJugadores(8)); //setter que modifica entrada de datos
console.log(juegoPocker.getCantDeJugaddores()); //getter que muestra ese cambio
