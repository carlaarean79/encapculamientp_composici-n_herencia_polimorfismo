//encapsulamiento
var Student = /** @class */ (function () {
    //se crea el constructor para darle un valor inicial a cada atributo
    // modificador publico
    function Student(paramDni, paramFirtName, paramLastName, paramEmail) {
        //tranformamos los atributos en objetos con this y le asignamos el valor que le corresponde por parametro
        this.dni = paramDni;
        this.firtName = paramFirtName;
        this.lastName = paramLastName;
        this.email = paramEmail;
    }
    Student.prototype.visualData = function () {
        console.log("\n---------------------------\n   DATOS DEL ESTUDIANTE\n---------------------------\nDNI: ".concat(this.dni, "\nPRIMER NOMBRE: ").concat(this.firtName, "\nAPELLIDO : ").concat(this.lastName, "\nEMAIL : ").concat(this.email, "\n"));
    };
    //METODOS SET PARA PODER MODICAFICAR INFORMACION
    Student.prototype.changeDni = function (dni) {
        this.dni = dni;
    };
    Student.prototype.changeFirtName = function (firtName) {
        this.firtName = firtName;
    };
    Student.prototype.changeLastName = function (lastName) {
        this.lastName = lastName;
    };
    Student.prototype.changeEmail = function (email) {
        this.email = email;
    };
    return Student;
}());
//creo la nueva instancia
var datosPersonales = new Student("27821713", "Carla", "Arean", "carlaandreaarean@gmail.com");
datosPersonales.visualData(); //la muestro
//modifo inform mediante set
datosPersonales.changeEmail("No posee");
datosPersonales.visualData(); //la muestro
