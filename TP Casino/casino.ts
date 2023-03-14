export class Casino {
    private ganador:boolean;
    private premio:boolean;
    
    constructor(pGanador:boolean,pPremio:boolean){
        this.ganador = pGanador;
        this.premio = pPremio;
}
public setGanador(pGanador:boolean):void{
    this.ganador = pGanador;
}
public getGanador():boolean{
    return this.ganador;
}
public setPagarPremio(pPremio:boolean):void{
   this.premio = pPremio;
}
public getPagarPremio():boolean{
    return this.premio;
}
}