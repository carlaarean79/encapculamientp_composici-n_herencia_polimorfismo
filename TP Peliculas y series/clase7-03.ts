class Televisor {//super clase//padre
    private canalActual: number;
    private volumenActual: number;
    private estaPrendido: boolean;
    public constructor() {
      this.canalActual = 1;
      this.volumenActual = 0;
      this.estaPrendido = false;
    };
  
    public setIsOn(): void {
      this.estaPrendido = !this.estaPrendido;
      // if (this.estaPrendido === false) {
      //   this.estaPrendido = true;
      // } else {
      //   this.estaPrendido = false;
      // }
    };
  
    public getInfo(): void {if (this.estaPrendido)
        console.log(`
      --------------------
              Info
      --------------------
      Canal:   ${this.canalActual}
      Volumen: ${this.volumenActual}
      `);
    }
  }
  class SmartTV extends Televisor {//sub clase/hijo/hereda las propiedades del padre y le agrega una nueva
    private isNetflix: boolean;
    public constructor(isNetflix: boolean) {
      super();//hereda los atribut de TElevisor
      this.isNetflix = isNetflix;
    }
  }
  let tele = new SmartTV(true);
  const oldTv = new Televisor();
  oldTv.setIsOn();
  oldTv.getInfo();
  