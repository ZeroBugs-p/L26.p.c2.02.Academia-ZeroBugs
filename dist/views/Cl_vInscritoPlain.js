// Cl_vInscritoPlain.ts
export default class Cl_vInscritoPlain {
    inNombre;
    inCedula;
    inSexo;
    inFechaN;
    inCurso;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("inscrito");
        this.inNombre = document.getElementById("inscrito_inNombre");
        this.inCedula = document.getElementById("inscrito_inCedula");
        this.inSexo = document.getElementById("inscrito_inSexo");
        this.inFechaN = document.getElementById("inscrito_inFechaN");
        this.inCurso = document.getElementById("inscrito_inCurso");
        this.btCancelar = document.getElementById("inscrito_btCancelar");
        this.btAceptar = document.getElementById("inscrito_btAceptar");
    }
    get nombre() {
        return this.inNombre.value;
    }
    get cedula() {
        return +this.inCedula.value;
    }
    get sexo() {
        return this.inSexo.value;
    }
    get fechaN() {
        return this.inFechaN.value;
    }
    get curso() {
        return this.inCurso.value;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
        this.inNombre.value = "";
        this.inCedula.value = "";
        this.inSexo.value = "";
        this.inFechaN.value = "";
        this.inCurso.value = "";
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
