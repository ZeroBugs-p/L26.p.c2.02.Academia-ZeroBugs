// Cl_cIncrito.ts
import Cl_mInscrito from "../models/Cl_mInscrito.js";
export default class Cl_cInscrito {
    vista;
    callback;
    constructor(vista) {
        // Inicializamos
        this.vista = vista;
        // El Controlador Realiza los Eventos de la Interfaz
        this.vista.onCancelar(() => this.btCancelarOnclick());
        this.vista.onAceptar(() => this.btAceptarOnclick());
    }
    // Metodo para que La Academia llame a este Controlador
    solicitarInscrito(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnclick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnclick() {
        this.callback(new Cl_mInscrito({ n: this.vista.nombre, c: this.vista.cedula, s: this.vista.sexo, fN: this.vista.fechaN, cu: this.vista.curso }));
        this.vista.ocultar();
    }
}
