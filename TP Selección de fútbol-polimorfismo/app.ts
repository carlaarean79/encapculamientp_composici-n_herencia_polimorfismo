import { SeleccionArgentina } from "./seleccion";
import { Entrenador } from './entrenador';
import { Jugador } from './jugador';
import { Masajista } from "./masajista";
import { Posicion } from "./posicion";


const kineseologo:Masajista=new Masajista("celeste y blanca","Francisco Ledezma","4562187988","5 de noviembre",2023,100000,"kineseología");
const posicion: Posicion = new Posicion(
  10,
  "delantero",
  "marcar Goles y asistir"
);
const Messi: Jugador = new Jugador(
  "celeste y blanca",
  "lionel Messi",
  "356488456528",
  "25 de junio",
  2023,20000,
  posicion,
  "PSG",true
);

console.log(Messi);
console.log(Messi.renewContract());
console.log(`se acordó un aumento de ${Messi.salario}`);
console.log(Messi.aptoJuego());

const posicionJugador: Posicion=new Posicion(21, "Arquero","Defender el arco, atajar goles");
const dibu:Jugador = new Jugador("verde","Emiliano Martínez","356548799","3 de marzo",2024,15000,posicionJugador,"Manchester United",false);
console.log(dibu);
console.log(dibu.renewContract());
console.log(`Se acordó un aumento de ${dibu.salario}`);
console.log(dibu.aptoJuego());
console.log(kineseologo.realizarMasajes());

const DTScalonni:Entrenador = new Entrenador("Azul","Lionel Scalonni","272794652218","5 de abril",2022,60000,false);
console.log(DTScalonni);
console.log(DTScalonni.organizarJugada());





