// Cl_cAcademia.ts
import Cl_mAcademia from "../models/Cl_mAcademia.js";
export default class Cl_cAcademia {
    mAcademia = new Cl_mAcademia();
    vAcademia;
    cInscrito;
    // Recibe la vista de la Academia y el controlador de Inscrito ya Armado
    constructor(vistaAcademia, controladorInscrito) {
        this.vAcademia = vistaAcademia;
        this.cInscrito = controladorInscrito;
        this.vAcademia.onNewInscrito(() => this.procesar1Inscrito());
    }
    procesar1Inscrito() {
        this.cInscrito.solicitarInscrito((i) => {
            if (i !== null) {
                this.mAcademia.procesarInscrito(i);
                this.vAcademia.reportar({ inscritos: this.mAcademia.inscritos(), porcentajeME: this.mAcademia.porcentajeME(),
                    porcentajeEG: this.mAcademia.porcentajeEG(), porcentaje3erE: this.mAcademia.porcentaje3erE(),
                    porcentajeIIngles: this.mAcademia.porcentajeIIngles(), porcentajeIComp: this.mAcademia.porcentajeIComp(),
                    porcentajeIIA: this.mAcademia.porcentajeIIA() });
            }
        });
    }
}
