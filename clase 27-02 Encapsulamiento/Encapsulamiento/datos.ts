//encapsulamiento
class Student{
    private dni : string;           //modificador privado
    private firtName : string;
    private lastName : string;
    private email : string;
    //se crea el constructor para darle un valor inicial a cada atributo
    // modificador publico
public constructor(paramDni:string,paramFirtName:string,paramLastName:string,paramEmail:string){
//tranformamos los atributos en objetos con this y le asignamos el valor que le corresponde por parametro
this.dni = paramDni;
this.firtName = paramFirtName;
this.lastName = paramLastName;
this.email = paramEmail;
}
public visualData():void{//se crea un método para visualizar toda la inform disponible
console.log(`
---------------------------
   DATOS DEL ESTUDIANTE
---------------------------
DNI: ${this.dni}
PRIMER NOMBRE: ${this.firtName}
APELLIDO : ${this.lastName}
EMAIL : ${this.email}
`)
}
//METODOS SET PARA PODER MODICAFICAR INFORMACION
public changeDni(dni:string):void{
    this.dni = dni;
}
public changeFirtName(firtName:string):void{
    this.firtName =firtName;
}
public changeLastName(lastName:string):void{
    this.lastName =lastName;
}
public changeEmail(email:string):void{
    this.email = email;
}
}
//creo la nueva instancia
let datosPersonales : Student = new Student("27821713","Carla","Arean","carlaandreaarean@gmail.com");
datosPersonales.visualData();//la muestro
//modifo inform mediante set
datosPersonales.changeEmail("No posee");
datosPersonales.visualData();//la muestro
