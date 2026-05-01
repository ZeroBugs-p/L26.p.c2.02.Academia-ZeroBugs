// Cl_mInscrito.ts

import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mInscrito extends Cl_mPersona {

    private _curso: string = "";

    constructor({n, c, s, fN, cu}: {
        n:string; c:number; fN: string; s: string; cu: string}={n: "",c:0, s:"",fN:"", cu:""}) {
            super({n, c, fN, s})
            this.curso = cu;
    }

    set curso(c: string) {
        this._curso = c;
    }

    get curso(): string {
        return this._curso;     }

     precioB(): number{
        if(this.curso === "Ingles") {
            return 20;
        } else 
        if (this.curso === "Computacion"){
            return 25;
        } else 
        if (this.curso === "I.A"){
            return 30;
        } 
        else return 0
    }
    descuentoME(): number{
        if(this.edad() < 18){
            return this.precioB()* 0.20;
        } else 
            return 0
    }
    descuento3erE(): number {
       if(this.sexo === "Mujer" && this.edad() > 50) {
            return this.precioB()*0.40;
        } else
            if(this.sexo === "Hombre" && this.edad() > 60){
                return this.precioB()*0.40
            } else
                return 0
    }
    inversion(): number {
        if(this.descuentoME()>0){
            return this.precioB() - this.descuentoME()
        } else if(this.descuento3erE()>0){
            return this.precioB() - this.descuento3erE()
        } else
            return this.precioB();  }
   
}