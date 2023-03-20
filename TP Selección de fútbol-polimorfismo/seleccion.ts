export class SeleccionArgentina {
  protected idTshirt: string;
  protected nameLastname: string;
  protected numPasaport: string;
  protected birthDate: string;
  protected contractExpiration: number;
  public salario: number;

  public constructor(
    idTshirt: string,
    nameLastname: string,
    numPasaport: string,
    birthDate: string,
    contractExpiration: number,
    salario: number
  ) {
    this.idTshirt = idTshirt;
    this.nameLastname = nameLastname;
    this.numPasaport = numPasaport;
    this.birthDate = birthDate;
    this.contractExpiration = contractExpiration;
    this.salario = salario;
  }
  public setIdTshirt(idTshirt: string): void {
    this.idTshirt = idTshirt;
  }
  public getIdTshirt(): string {
    return this.idTshirt;
  }
  public setNameLastName(nameLastname: string): void {
    this.nameLastname = nameLastname;
  }
  public getNameLastName(): string {
    return this.nameLastname;
  }
  public setNumPasaport(numPasaport: string): void {
    this.numPasaport = numPasaport;
  }
  public getNumPasaport(): string {
    return this.numPasaport;
  }
  public setBirthDate(birthDate: string): void {
    this.birthDate = birthDate;
  }
  public getBirthDate(): string {
    return this.birthDate;
  }
  public setContractExpiration(contractExpiration: number): void {
    this.contractExpiration = contractExpiration;
  }
  public getContractEspiration(): number {
    return this.contractExpiration;
  }
  public setSalario(salario: number) {
    this.salario = salario;
  }
  public getSalario(): number {
    return this.salario;
  }
  public renewContract() {      //método que devuelve valor lógico según la condición especificada
    let aux = 2023;
    if (this.contractExpiration <= aux) {
      return "Iniciar negociación de renovación de contrato";
    } else {
      return "Contrato renovado";
    }
  }
  public aumentoSalario() {                             //método al que se le aplica polimorfismo
    if (this.renewContract() === "Contrato renovado") {//según el método renewContract y de acuerdo al atributo salario
      return this.salario++;                            //devuelve un valor lógico según la condición especificada
    } else {
      return "No hubo acuerdo";
    }
  }
}
