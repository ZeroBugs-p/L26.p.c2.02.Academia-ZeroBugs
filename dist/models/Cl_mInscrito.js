// Cl_mInscrito.ts
import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mInscrito extends Cl_mPersona {
    _curso = "";
    constructor({ n, c, s, fN, cu } = { n: "", c: 0, s: "", fN: "", cu: "" }) {
        super({ n, c, fN, s });
        this.curso = cu;
    }
    set curso(c) {
        this._curso = c;
    }
    get curso() {
        return this._curso;
    }
    precioB() {
        if (this.curso === "Ingles") {
            return 20;
        }
        else if (this.curso === "Computacion") {
            return 25;
        }
        else if (this.curso === "I.A") {
            return 30;
        }
        else
            return 0;
    }
    descuento() {
        if (this.curso === "Ingles" && this.edad() <= 18) {
            return this.precioB() * 0.20;
        }
        else if (this.curso === "Ingles" && this.edad() >= 50 && this.sexo === "Mujer" || this.curso === "Ingles" && this.edad() >= 60 && this.sexo === "Hombre") {
            return this.precioB() * 0.40;
        }
        else if (this.curso === "Computacion" && this.edad() <= 18) {
            return this.precioB() * 0.20;
        }
        else if (this.curso === "Computacion" && this.edad() >= 50 && this.sexo === "Mujer" || this.curso === "Computacion" && this.edad() >= 60 && this.sexo === "Hombre") {
            return this.precioB() * 0.40;
        }
        else if (this.curso === "I.A" && this.edad() <= 18) {
            return this.precioB() * 0.20;
        }
        else if (this.curso === "I.A" && this.edad() >= 50 && this.sexo === "Mujer" || this.curso === "I.A" && this.edad() >= 60 && this.sexo === "Hombre") {
            return this.precioB() * 0.40;
        }
        else
            return 0;
    }
    inversion() {
        return this.precioB() - this.descuento();
    }
}
