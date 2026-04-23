// Cl_vAcademiaPlain.ts

import { I_vAcademia } from "../interfaces/I_vAcademia.js";

export default class Cl_vAcademiaPlain implements I_vAcademia {
    private lblInscritos: HTMLElement;
    private lblPorcentajeME: HTMLElement;
    private lblPorcentajeEG: HTMLElement;
    private lblPorcentaje3erE: HTMLElement;
    private lblPorcentajeIIngles: HTMLElement;
    private lblPorcentajeIComp: HTMLElement;
    private lblPorcentajeIIA: HTMLElement;
    private btNewinscrito: HTMLButtonElement;
    private vista: HTMLElement | null;

    constructor() {
        this.lblInscritos = document.getElementById("body_lblInscritos") as HTMLElement;
        this.lblPorcentajeME = document.getElementById("body_lblPorcentajeME") as HTMLElement;
        this.lblPorcentajeEG = document.getElementById("body_lblPorcentajeEG") as HTMLElement;
        this.lblPorcentaje3erE = document.getElementById("body_lblPorcentaje3erE") as HTMLElement;
        this.lblPorcentajeIIngles = document.getElementById("body_lblPorcentajeIIngles") as HTMLElement;
        this.lblPorcentajeIComp = document.getElementById("body_lblPorcentajeIComp") as HTMLElement;
        this.lblPorcentajeIIA = document.getElementById("body_lblPorcentajeIIA") as HTMLElement;
        
        this.btNewinscrito = document.getElementById("body_btNewinscrito") as HTMLButtonElement;
        this.vista = document.getElementById("body");
    }

    onNewInscrito(callback: () => void): void {
        this.btNewinscrito.onclick = callback;      }

    reportar({ inscritos, porcentajeME, porcentajeEG, porcentaje3erE, porcentajeIIngles, porcentajeIComp, porcentajeIIA }: { inscritos: number; porcentajeME: number; porcentajeEG: number; porcentaje3erE: number; porcentajeIIngles: number; porcentajeIComp: number; porcentajeIIA: number; }): void {
        this.lblInscritos.innerHTML = `${inscritos}`
        this.lblPorcentajeME.innerHTML = `${porcentajeME.toFixed(2)}`
        this.lblPorcentajeEG.innerHTML = `${porcentajeEG.toFixed(2)}`
        this.lblPorcentaje3erE.innerHTML = `${porcentaje3erE.toFixed(2)}`
        this.lblPorcentajeIIngles.innerHTML = `${porcentajeIIngles.toFixed(2)}`
        this.lblPorcentajeIComp.innerHTML = `${porcentajeIComp.toFixed(2)}`
        this.lblPorcentajeIIA.innerHTML = `${porcentajeIIA.toFixed(2)}`
    }

    mostrar(): void {
        if (this.vista === null) return;
        this.vista.hidden = false;          }

    ocultar(): void {
        if (this.vista === null) return;
        this.vista.hidden = true;           }
}