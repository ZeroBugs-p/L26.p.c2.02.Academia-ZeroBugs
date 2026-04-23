// Cl_mPersona.ts
export default class Cl_mPersona {
    _nombre = "";
    _cedula = 0;
    _sexo = "";
    _fechaN = new Date();
    constructor({ n, c, s, fN } = { n: "", c: 0, s: "", fN: "" }) {
        this.nombre = n;
        this.cedula = c;
        this.sexo = s;
        this.fechaN = fN;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set cedula(c) {
        this._cedula = c;
    }
    get cedula() {
        return this._cedula;
    }
    set sexo(s) {
        this._sexo = s;
    }
    get sexo() {
        return this._sexo;
    }
    set fechaN(fN) {
        this._fechaN = new Date(fN);
    }
    get fechaN() {
        return this._fechaN;
    }
    edad() {
        const hoy = new Date(); // fecha actual
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
