import { JuegoDeCasino } from './juegosdecasino';
import { Ruleta } from './ruleta';
import { Pocker } from './pocker';
import { Casino } from './casino';

const casinoOpen: Casino = new Casino(false,false);//creo una instancia de casino para poder usar composición
const juegoRuleta: Ruleta = new Ruleta(10,2000,8,true,casinoOpen);//nueva instancia de ruleta/hija
console.log(juegoRuleta);
const juegoPocker: Pocker = new Pocker(3,5000,6,true,casinoOpen);//creo nueva instancia de pocker
console.log(juegoPocker);
console.log(juegoPocker.setCantDeJugadores(8));//setter que modifica entrada de datos
console.log(juegoPocker.getCantDeJugaddores());//getter que muestra ese cambio







