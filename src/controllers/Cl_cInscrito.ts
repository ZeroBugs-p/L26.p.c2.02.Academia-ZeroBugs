// Cl_cIncrito.ts

import Cl_mInscrito from "../models/Cl_mInscrito.js";
import { I_vInscrito } from "../interfaces/I_vInscrito.js";

export default class Cl_cInscrito {
    private vista: I_vInscrito;
    private callback!: (incrito: Cl_mInscrito | null ) => void;

    constructor(vista: I_vInscrito) {
        // Inicializamos
            this.vista = vista;
        // El Controlador Realiza los Eventos de la Interfaz
            this.vista.onCancelar (() => this.btCancelarOnclick());
            this.vista.onAceptar (() => this.btAceptarOnclick());
    }

    // Metodo para que La Academia llame a este Controlador
        solicitarInscrito(callback: (inscrito: Cl_mInscrito | null) => void) {
            this.callback = callback;
            this.vista.mostrar();
        }

        private btCancelarOnclick() {
            this.callback(null);
            this.vista.ocultar();
        }

        private btAceptarOnclick() {
            this.callback(new Cl_mInscrito({n:this.vista.nombre, c:this.vista.cedula, s:this.vista.sexo, fN:this.vista.fechaN, cu:this.vista.curso}));
            this.vista.ocultar();
        }
}