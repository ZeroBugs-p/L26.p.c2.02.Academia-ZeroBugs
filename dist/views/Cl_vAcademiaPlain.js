// Cl_vAcademiaPlain.ts
export default class Cl_vAcademiaPlain {
    lblInscritos;
    lblPorcentajeME;
    lblPorcentajeEG;
    lblPorcentaje3erE;
    lblPorcentajeIIngles;
    lblPorcentajeIComp;
    lblPorcentajeIIA;
    btNewinscrito;
    vista;
    constructor() {
        this.lblInscritos = document.getElementById("body_lblInscritos");
        this.lblPorcentajeME = document.getElementById("body_lblPorcentajeME");
        this.lblPorcentajeEG = document.getElementById("body_lblPorcentajeEG");
        this.lblPorcentaje3erE = document.getElementById("body_lblPorcentaje3erE");
        this.lblPorcentajeIIngles = document.getElementById("body_lblPorcentajeIIngles");
        this.lblPorcentajeIComp = document.getElementById("body_lblPorcentajeIComp");
        this.lblPorcentajeIIA = document.getElementById("body_lblPorcentajeIIA");
        this.btNewinscrito = document.getElementById("body_btNewinscrito");
        this.vista = document.getElementById("body");
    }
    onNewInscrito(callback) {
        this.btNewinscrito.onclick = callback;
    }
    reportar({ inscritos, porcentajeME, porcentajeEG, porcentaje3erE, porcentajeIIngles, porcentajeIComp, porcentajeIIA }) {
        this.lblInscritos.innerHTML = `${inscritos}`;
        this.lblPorcentajeME.innerHTML = `${porcentajeME.toFixed(2)}`;
        this.lblPorcentajeEG.innerHTML = `${porcentajeEG.toFixed(2)}`;
        this.lblPorcentaje3erE.innerHTML = `${porcentaje3erE.toFixed(2)}`;
        this.lblPorcentajeIIngles.innerHTML = `${porcentajeIIngles.toFixed(2)}`;
        this.lblPorcentajeIComp.innerHTML = `${porcentajeIComp.toFixed(2)}`;
        this.lblPorcentajeIIA.innerHTML = `${porcentajeIIA.toFixed(2)}`;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
