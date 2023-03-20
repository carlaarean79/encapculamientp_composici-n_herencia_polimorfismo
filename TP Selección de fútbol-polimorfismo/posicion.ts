export class Posicion{          //clase que compone a la clase Jugador
    private numero:number;
    private posicion: string;
    private tipoDeJugada:string;
    
    public constructor(numero:number,posicion:string,tipoDeJugada:string){
                this.numero = numero;
                this.posicion = posicion;
                this.tipoDeJugada = tipoDeJugada;
        }
        public setNumeroDeCamiseta(numero:number):void{
                this.numero = numero;
        }
        public getNumeroDeCamiseta():number{
                return this.numero;
        }
        public setPosicion(posicion:string):void{
                this.posicion = posicion;
        }
        public getPosicion():string{
                return this.posicion;
        }
        public setFuncion(tipoDeJugada:string):void{
                this.tipoDeJugada = tipoDeJugada;
        }
        public getFuncion():string{
                return this.tipoDeJugada;
        }
        }