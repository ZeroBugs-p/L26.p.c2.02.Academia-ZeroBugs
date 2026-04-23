// Cl_mAcademia.ts
export default class Cl_mAcademia {
    //creamos todos los contadores para cada reporte
    cntInscritos;
    cntEGene;
    cntMenores;
    cnt3erE;
    cntIngles;
    cntComp;
    cntIA;
    constructor() {
        //inicializamos cada uno
        this.cntInscritos = 0;
        this.cntEGene = 0;
        this.cntMenores = 0;
        this.cnt3erE = 0;
        this.cntIngles = 0;
        this.cntComp = 0;
        this.cntIA = 0;
    }
    procesarInscrito(i) {
        this.cntInscritos++;
        if (i.edad() > 18 && i.edad() < 50) {
            this.cntEGene++;
        }
        else if (i.edad() <= 18) {
            this.cntMenores++;
        }
        else if (i.edad() >= 50) {
            this.cnt3erE++;
        }
        if (i.curso === "Ingles") {
            this.cntIngles++;
        }
        else if (i.curso == "Computacion") {
            this.cntComp++;
        }
        else if (i.curso == "I.A") {
            this.cntIA++;
        }
    }
    porcentajeME() {
        if (this.cntInscritos > 0) {
            return (this.cntMenores * 100) / this.cntInscritos;
        }
        else
            return 0;
    }
    porcentajeEG() {
        if (this.cntInscritos > 0) {
            return (this.cntEGene * 100) / this.cntInscritos;
        }
        else
            return 0;
    }
    porcentaje3erE() {
        if (this.cntInscritos > 0) {
            return (this.cnt3erE * 100) / this.cntInscritos;
        }
        else
            return 0;
    }
    porcentajeIIngles() {
        if (this.cntInscritos > 0) {
            return (this.cntIngles * 100) / this.cntInscritos;
        }
        else
            return 0;
    }
    porcentajeIComp() {
        if (this.cntInscritos > 0) {
            return (this.cntComp * 100) / this.cntInscritos;
        }
        else
            return 0;
    }
    porcentajeIIA() {
        if (this.cntInscritos > 0) {
            return (this.cntIA * 100) / this.cntInscritos;
        }
        else
            return 0;
    }
    inscritos() {
        return this.cntInscritos;
    }
}
