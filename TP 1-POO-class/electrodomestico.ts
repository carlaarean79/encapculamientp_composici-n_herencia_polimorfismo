class Electrodomestico{//se crea la clase electrodomestico
    public nombre: string;//con sus variables inernas/caractericas/estado
    public precioBase: number;
    public color: string ;
    public consumoEnergetico: number;
    public peso: number;

    constructor(paramNombre:string, paramPrecioBase:number,paramColor:string,//se crea un contructor para darle un valor inicial
        paramConsumoEnergetico:number,paramPeso:number){//a los atributos del objeto. para ello se le pasa parametros
        this.nombre = paramNombre;//y se los iguala al atributo
        this.precioBase = paramPrecioBase,
        this.color  = paramColor;
        this.consumoEnergetico = paramConsumoEnergetico;
        this.peso = paramPeso;
    }
//se crean las funciones para darle funcionalidad al objeto
   public esBajoConsumo(): boolean {//esta función determina si el electrod. es bajo consumo
    let auxiliar: boolean = false;    //se crea una variable sonde se almacena el valor booleano false
    if (this.consumoEnergetico > 100){// si el consumo es mayor que 100
        auxiliar = false;//no es bajo consumo
        } else {//sino
        auxiliar = true;//es bajo consumo
        }
        return auxiliar;//retorna en contenido almacenado en auxiliar según sea la condición
    }
    public balance(): number {//se crea la función para calcular el balance
        let calcularBalance: number = this.precioBase/this.peso;//se divide precio en peso y se almacena en la variable
        return calcularBalance;//retorna el contenido de la variable
    }
    public altaGama(): boolean {//se crea una función para determinar si el electr. es alta o baja gama
    let balance = this.precioBase/this.peso;//para ello de crea una variable donde se almacenará el resultado de la operación
    let auxiliar: boolean;//se crea una variable auxiliar de tipo boolean
    if (balance > 3){//si el resultado de balance es mayor que 3
     auxiliar = false;//no es alta gama
    } else {//sino
        auxiliar = true;//es alta gama
    }
    return auxiliar;//retorna el valor de la variable auxiliar según corresponda
    }
    //set y get
    public setEsBajoConsumo(paramConsumo):void{
        this.esBajoConsumo = paramConsumo;
            }
    public getEsBajoConsumo(){
        return this.esBajoConsumo;
    }
    public setBalance(paramBalance):void{
       this.balance = paramBalance;
    }
    public getBalance(){
        return this.balance;
    }
    public setAltaGama(paramGama): void{
        this.altaGama = paramGama;
     }
     public getAltaGama(){
         return this.altaGama;
     }
        }
let electrHeladera:Electrodomestico = new Electrodomestico("Patric",125000,"Blanco",120,63,);//nueva instacia heladera
electrHeladera;//comprobación de caract.
electrHeladera.esBajoConsumo();//comprobación de funcionalidad
electrHeladera.altaGama();
electrHeladera.balance();



let electrAireAcondicionado:Electrodomestico = new Electrodomestico("Phillip",256000,"Blanco",40,80);//nueva instancia aire acondicionado
electrAireAcondicionado;
electrAireAcondicionado.esBajoConsumo();
electrAireAcondicionado.altaGama();
electrAireAcondicionado.balance();





