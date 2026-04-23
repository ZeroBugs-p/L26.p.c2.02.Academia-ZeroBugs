// Cl_vInscritoPlain.ts

import { I_vInscrito } from "../interfaces/I_vInscrito.js";

export default class Cl_vInscritoPlain implements I_vInscrito {
    
    private inNombre: HTMLInputElement;
    private inCedula: HTMLInputElement;
    private inSexo: HTMLSelectElement;
    private inFechaN: HTMLInputElement;
    private inCurso: HTMLSelectElement;
    private btCancelar: HTMLButtonElement;
    private btAceptar: HTMLButtonElement;
    private vista: HTMLElement;

    constructor() {
        
        this.vista = document.getElementById("inscrito") as HTMLElement;
        this.inNombre = document.getElementById("inscrito_inNombre") as HTMLInputElement;
        this.inCedula = document.getElementById("inscrito_inCedula") as HTMLInputElement;
        this.inSexo = document.getElementById("inscrito_inSexo") as HTMLSelectElement;
        this.inFechaN = document.getElementById("inscrito_inFechaN") as HTMLInputElement;
        this.inCurso = document.getElementById("inscrito_inCurso") as HTMLSelectElement;
        this.btCancelar = document.getElementById("inscrito_btCancelar") as HTMLButtonElement;
        this.btAceptar = document.getElementById("inscrito_btAceptar") as HTMLButtonElement;          
        }

    get nombre(): string {
        return this.inNombre.value; }

    get cedula(): number {
        return +this.inCedula.value;  }

    get sexo(): string {
        return this.inSexo.value;   }

    get fechaN(): string {
        return this.inFechaN.value;}

    get curso(): string{
        return this.inCurso.value; }

    onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;   }

    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;  }

    mostrar(): void {
        if (this.vista === null ) return;
            this.vista.hidden = false;
            this.inNombre.value = "";
            this.inCedula.value = "";
            this.inSexo.value = "";
            this.inFechaN.value = "";
            this.inCurso.value = "";
        }

    ocultar(): void {
        if (this.vista === null) return;
            this.vista.hidden = true;
    }
}