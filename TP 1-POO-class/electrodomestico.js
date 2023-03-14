var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(paramNombre, paramPrecioBase, paramColor, //se crea un contructor para darle un valor inicial
    paramConsumoEnergetico, paramPeso) {
        this.nombre = paramNombre; //y se los iguala al atributo
        this.precioBase = paramPrecioBase,
            this.color = paramColor;
        this.consumoEnergetico = paramConsumoEnergetico;
        this.peso = paramPeso;
    }
    //se crean las funciones para darle funcionalidad al objeto
    Electrodomestico.prototype.esBajoConsumo = function () {
        var auxiliar = false; //se crea una variable sonde se almacena el valor booleano false
        if (this.consumoEnergetico > 100) { // si el consumo es mayor que 100
            auxiliar = false; //no es bajo consumo
        }
        else { //sino
            auxiliar = true; //es bajo consumo
        }
        return auxiliar; //retorna en contenido almacenado en auxiliar según sea la condición
    };
    Electrodomestico.prototype.balance = function () {
        var calcularBalance = this.precioBase / this.peso; //se divide precio en peso y se almacena en la variable
        return calcularBalance; //retorna el contenido de la variable
    };
    Electrodomestico.prototype.altaGama = function () {
        var balance = this.precioBase / this.peso; //para ello de crea una variable donde se almacenará el resultado de la operación
        var auxiliar; //se crea una variable auxiliar de tipo boolean
        if (balance > 3) { //si el resultado de balance es mayor que 3
            auxiliar = false; //no es alta gama
        }
        else { //sino
            auxiliar = true; //es alta gama
        }
        return auxiliar; //retorna el valor de la variable auxiliar según corresponda
    };
    //set y get
    Electrodomestico.prototype.setEsBajoConsumo = function (paramConsumo) {
        this.esBajoConsumo = paramConsumo;
    };
    Electrodomestico.prototype.getEsBajoConsumo = function () {
        return this.esBajoConsumo;
    };
    Electrodomestico.prototype.setBalance = function (paramBalance) {
        this.balance = paramBalance;
    };
    Electrodomestico.prototype.getBalance = function () {
        return this.balance;
    };
    Electrodomestico.prototype.setAltaGama = function (paramGama) {
        this.altaGama = paramGama;
    };
    Electrodomestico.prototype.getAltaGama = function () {
        return this.altaGama;
    };
    return Electrodomestico;
}());
var electrHeladera = new Electrodomestico("Patric", 125000, "Blanco", 120, 63); //nueva instacia heladera
electrHeladera; //comprobación de caract.
electrHeladera.esBajoConsumo(); //comprobación de funcionalidad
electrHeladera.altaGama();
electrHeladera.balance();
electrHeladera.setAltaGama(false);
var electrAireAcondicionado = new Electrodomestico("Phillip", 256000, "Blanco", 40, 80); //nueva instancia aire acondicionado
console.log(electrAireAcondicionado);
console.log(electrAireAcondicionado.esBajoConsumo());
console.log(electrAireAcondicionado.altaGama());
console.log(electrAireAcondicionado.balance());
