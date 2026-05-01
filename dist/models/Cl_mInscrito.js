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
    descuentoME() {
        if (this.edad() < 18) {
            return this.precioB() * 0.20;
        }
        else
            return 0;
    }
    descuento3erE() {
        if (this.sexo === "Mujer" && this.edad() > 50) {
            return this.precioB() * 0.40;
        }
        else if (this.sexo === "Hombre" && this.edad() > 60) {
            return this.precioB() * 0.40;
        }
        else
            return 0;
    }
    inversion() {
        return this.precioB() - this.descuentoME();
    }
}
