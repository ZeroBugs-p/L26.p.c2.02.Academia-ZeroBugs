// Cl_cAcademia.ts

import Cl_mAcademia from "../models/Cl_mAcademia.js";
import { I_vAcademia } from "../interfaces/I_vAcademia.js";
import Cl_cInscrito from "./Cl_cInscrito.js";
import Cl_mInscrito from "../models/Cl_mInscrito.js";

export default class Cl_cAcademia {
    private mAcademia: Cl_mAcademia = new Cl_mAcademia();
    private vAcademia: I_vAcademia;
    private cInscrito: Cl_cInscrito;

    //Datos Constantes para La Academia
    private readonly datosAcademia = [
        {n: "Ana Gil", c: 8888, s: "Mujer", fN: "2011, 6, 15", cu: "Computacion"},
        {n: "Mery Paz", c: 6666, s: "Mujer", fN: "1999, 7, 25", cu: "Computacion"},
        {n: "Juan Sanz", c: 9999, s: "Hombre", fN: "1980, 9, 20", cu: "I.A"},
        {n: "Paty Ortiz", c: 3333, s: "Mujer", fN: "1970, 5, 14", cu: "Computacion"},
        {n: "Liz Ramos", c: 2222, s: "Mujer", fN: "2015, 1, 3", cu: "Ingles"},
        {n: "Raul Mendez", c: 5555, s: "Hombre", fN: "1995, 10, 11", cu: "Computacion"},
        {n: "Tony Flores", c: 7777, s: "Hombre", fN: "1999, 8, 7", cu: "I.A"},
        {n: "Gaby Lopez", c: 1111, s: "Mujer", fN: "1966, 7, 19", cu: "Ingles"},
    ];

    // Recibe la vista de la Academia y el controlador de Inscrito ya Armado
        constructor(vistaAcademia: I_vAcademia, controladorInscrito: Cl_cInscrito) {
            this.vAcademia = vistaAcademia;
            this.cInscrito = controladorInscrito; 

            //cargar los datos constantes
            this.cargarDatosConst()
            
            this.vAcademia.onNewInscrito(() => this.procesar1Inscrito())

            //actualizar vista inicial con datos constantes
            this.actualizarVista();
    }
    // nuevo metodo para cargar datos constantes a la academia
    private cargarDatosConst(): void{
        for (let b of this.datosAcademia) {
            const inscrito = new Cl_mInscrito({n: b.n, c: b.c, s: b.s, fN: b.fN, cu: b.cu});
            this.mAcademia.procesarInscrito(inscrito);
        }
    }
    //nuevo metodo para actualizar la vista con los datos de la academia
    private actualizarVista(): void{
        this.vAcademia.reportar({
            inscritos: this.mAcademia.inscritos(), porcentajeME: this.mAcademia.porcentajeME(),
            porcentajeEG: this.mAcademia.porcentajeEG(), porcentaje3erE: this.mAcademia.porcentaje3erE(),
            porcentajeIIngles: this.mAcademia.porcentajeIIngles(), porcentajeIComp: this.mAcademia.porcentajeIComp(),
            porcentajeIIA: this.mAcademia.porcentajeIIA(), totalDME: this.mAcademia.totalDME(),
            totalD3erE: this.mAcademia.totalD3erE()
        });
    }
    private procesar1Inscrito(): void {
        this.cInscrito.solicitarInscrito((i) => {
            if(i!== null) {
                this.mAcademia.procesarInscrito(i);
                /*this.vAcademia.reportar({ inscritos: this.mAcademia.inscritos(), porcentajeME: this.mAcademia.porcentajeME(), 
                    porcentajeEG: this.mAcademia.porcentajeEG(), porcentaje3erE: this.mAcademia.porcentaje3erE(), 
                    porcentajeIIngles: this.mAcademia.porcentajeIIngles(), porcentajeIComp: this.mAcademia.porcentajeIComp(), 
                    porcentajeIIA: this.mAcademia.porcentajeIIA(), totalDME: this.mAcademia.totalDME(), totalD3erE: this.mAcademia.totalD3erE()});*/
                this.actualizarVista(); //ahora solo se utiliza este
            }
        })
    }
}