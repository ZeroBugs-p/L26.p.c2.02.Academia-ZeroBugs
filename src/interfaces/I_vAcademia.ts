// I_vAcademia.ts

export interface I_vAcademia {
 
        onNewInscrito(callback: () => void): void;
        reportar({inscritos, porcentajeME, porcentajeEG, porcentaje3erE, porcentajeIIngles, porcentajeIComp, porcentajeIIA, totalDME, totalD3erE}: 
            {inscritos: number; porcentajeME: number; porcentajeEG: number; porcentaje3erE: number; 
                porcentajeIIngles: number; porcentajeIComp: number; porcentajeIIA: number; totalDME: number; totalD3erE: number}): void;
}