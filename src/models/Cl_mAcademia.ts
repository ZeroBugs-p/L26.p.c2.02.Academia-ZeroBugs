// Cl_mAcademia.ts

import Cl_mInscrito from "./Cl_mInscrito.js";

export default class Cl_mAcademia {
        //creamos todos los contadores para cada reporte
        private cntInscritos: number;
        private cntEGene: number;
        private cntMenores: number;
        private cnt3erE: number;
        private cntIngles: number;
        private cntComp: number;
        private cntIA: number;
        private acmDME: number;
        private acmD3erE: number;
        private acmInver: number;
        constructor(){
                //inicializamos cada uno
                this.cntInscritos = 0;
                this.cntEGene = 0;
                this.cntMenores = 0;
                this.cnt3erE = 0;
                this.cntIngles = 0;
                this.cntComp = 0;
                this.cntIA = 0;
                this.acmDME = 0;
                this.acmD3erE = 0;
                this.acmInver = 0;
        }


        procesarInscrito(i: Cl_mInscrito): void {
                this.cntInscritos++
                if(i.edad() > 18 && i.edad() < 50){
                        this.cntEGene++
                } else if(i.edad() <= 18){
                        this.cntMenores++
                } else if(i.edad() >= 50){
                        this.cnt3erE++
                }
                if(i.curso === "Ingles"){
                        this.cntIngles++
                } else if(i.curso == "Computacion"){
                        this.cntComp++
                } else if(i.curso == "I.A"){
                        this.cntIA++
                }
                this.acmDME += i.descuentoME()
                this.acmD3erE += i.descuento3erE()
                this.acmInver += i.inversion()
        }
        porcentajeME(): number{
                if(this.cntInscritos > 0){
                        return (this.cntMenores * 100)/this.cntInscritos
                }else 
                        return 0
        } 
        porcentajeEG(): number{
                if(this.cntInscritos > 0){
                        return (this.cntEGene * 100)/this.cntInscritos
                } else return 0
        }
        porcentaje3erE(): number{
                if(this.cntInscritos > 0){
                        return (this.cnt3erE * 100)/this.cntInscritos
                } else return 0
        }
        porcentajeIIngles(): number{
                if(this.cntInscritos > 0){
                        return (this.cntIngles * 100)/this.cntInscritos
                } else return 0
        }
        porcentajeIComp(): number{
                if(this.cntInscritos > 0){
                        return (this.cntComp * 100)/this.cntInscritos
                } else return 0
        }
        porcentajeIIA(): number{
                if(this.cntInscritos > 0){
                        return (this.cntIA * 100)/this.cntInscritos
                } else return 0
        }
        inscritos(): number{
                return this.cntInscritos
        }
        totalDME(): number{
                return this.acmDME
        }
        totalD3erE(): number{
                return this.acmD3erE
        }
        inversionTotal(): number{
                return this.acmInver
        }
}