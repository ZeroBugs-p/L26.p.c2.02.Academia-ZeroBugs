// Cl_cAcademia.ts

import Cl_mAcademia from "../models/Cl_mAcademia.js";
import { I_vAcademia } from "../interfaces/I_vAcademia.js";
import Cl_cInscrito from "./Cl_cInscrito.js";

export default class Cl_cAcademia {
    private mAcademia: Cl_mAcademia = new Cl_mAcademia();
    private vAcademia: I_vAcademia;
    private cInscrito: Cl_cInscrito;

    // Recibe la vista de la Academia y el controlador de Inscrito ya Armado
        constructor(vistaAcademia: I_vAcademia, controladorInscrito: Cl_cInscrito) {
            this.vAcademia = vistaAcademia;
            this.cInscrito = controladorInscrito; 
            
            this.vAcademia.onNewInscrito(() => this.procesar1Inscrito())
    }

    private procesar1Inscrito(): void {
        this.cInscrito.solicitarInscrito((i) => {
            if(i!== null) {
                this.mAcademia.procesarInscrito(i);
                this.vAcademia.reportar({ inscritos: this.mAcademia.inscritos(), porcentajeME: this.mAcademia.porcentajeME(), 
                    porcentajeEG: this.mAcademia.porcentajeEG(), porcentaje3erE: this.mAcademia.porcentaje3erE(), 
                    porcentajeIIngles: this.mAcademia.porcentajeIIngles(), porcentajeIComp: this.mAcademia.porcentajeIComp(), 
                    porcentajeIIA: this.mAcademia.porcentajeIIA()});
            }
        })
    }
}