// Cl_mPersona.ts

export default class Cl_mPersona {
    private _nombre: string = "";
    private _cedula: number = 0;
     private _sexo: string = "";
    private _fechaN: Date = new Date();
   


   constructor({n,c,s,fN}:{n:string, c:number, s:string, fN:string}={n:"", c:0, s:"", fN:""}){
        this.nombre = n;
        this.cedula = c;
        this.sexo = s;
        this.fechaN = fN;
    }

    set nombre(n:string){
        this._nombre = n;
    }

    get nombre(): string{
        return this._nombre;
    }

    set cedula(c:number){
        this._cedula = c;
    }

    get cedula(): number{
        return this._cedula;
    }

    set sexo(s:string){
        this._sexo = s;
    }

    get sexo(): string{
        return this._sexo;
    }

    set fechaN(fN:string){
        this._fechaN = new Date(fN);
    }

    get fechaN(): Date{
        return this._fechaN;
    }

    edad(): number {
    const hoy = new Date();  // fecha actual

    let edad = hoy.getFullYear() - this.fechaN.getFullYear();

    const mesActual = hoy.getMonth();
    const mesNac = this.fechaN.getMonth();
    const diaActual = hoy.getDate();
    const diaNac = this.fechaN.getDate();
    
    //oswal puso esto y dijo que si no ha cumplido años en el año que estamos le restara 1.
    if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
        edad--;
    }
    
    return edad;
}

}