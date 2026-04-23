// Cl_vProfeBootstrap.ts
/*
import { Cl_mInscrito } from "../interfaces/I_vInscrito.js";
    declare var bootstrap: any;

export default class Cl_vProfeBootstrap implements Cl_mInscrito {
    
    private inNombre: HTMLInputElement;
    private inCedula: HTMLInputElement;
    private inSexo: HTMLSelectElement;
    private inFechaN: HTMLInputElement;
    private inCurso: HTMLInputElement;
    private btCancelar: HTMLButtonElement;
    private btAceptar: HTMLButtonElement;
    private modal: any;

    // Para Ocultar Sueldo y Horas
        private hideSalary: HTMLElement;
        private hideHours: HTMLElement;

    constructor() {
        
        this.inNombre = document.getElementById("inscrito_inNombre") as HTMLInputElement;
        this.inCedula = document.getElementById("inscrito_inCedula") as HTMLInputElement;
        this.inSexo = document.getElementById("inscrito_inSexo") as HTMLSelectElement;
        this.inFechaN = document.getElementById("inscrito_inFechaN") as HTMLInputElement;
        this.inCurso = document.getElementById("inscrito_inCurso") as HTMLInputElement;
        this.btCancelar = document.getElementById("inscrito_btCancelar") as HTMLButtonElement;
        this.btAceptar = document.getElementById("inscrito_btAceptar") as HTMLButtonElement;

        const elementoModal = document.getElementById("inscrito") as HTMLElement;
            this.modal = new bootstrap.Modal(elementoModal)

        // Obtenemos la Inf de los id de los Div
            this.hideSalary = document.getElementById("hideSalary") as HTMLElement;
            this.hideHours = document.getElementById("hideHours") as HTMLElement;

        // Escuchamos los Cambios de Todos los Campos
            this.inNombre.addEventListener("input", () => this.validarBoton());
            this.inCedula.addEventListener("input", () => this.validarBoton());
            this.inFechaN.addEventListener("input", () => this.validarBoton());
            this.inCurso.addEventListener("input", () => this.validarBoton());
            this.inSexo.addEventListener("change", () => {
                this.actualizarCampos();
                this.validarBoton();
            });

        // Estado Inicial
            this.actualizarCampos();
            this.validarBoton();
    }
//Mostrar y Ocultar el Campo segun El Tipo "Fijo/Contratado"

        private actualizarCampos(): void {
            // Creamos una constante del tipo
                const tipo = this.inSexo.value;

            // Estado por defecto de los Campos
                this.hideSalary.hidden = true;
                this.hideSalary.hidden = true;

            // Condiciones Para Cambiar el Estado por Defecto
                if (tipo === "fijo" ) {
                    this.hideSalary.hidden = false; }
                
                else if (tipo === "contratado") {
                    this.hideHours.hidden = false;  }

    }

    // Validar Si el Boton Aceptar debe estar Habilitado

        private validarBoton(): void {
            // Validamos los Campos que Siempre se muestran
                const tipo = this.inSexo.value;

                const soloLetras =/^[a-zA-ZáéíóúñÑÁÉÍÓÚ\s]+$/; // Solo letras Incluyendo Acentos y espacios.
                const nombre = this.inNombre.value.trim(); // trim quita los Espacios al inicio y al final.
                const nombreValido = nombre !== "" && soloLetras.test(nombre); // test es un metodo que dice Si la palabra no tiene Numeros(V/F).

                const bonoValido = this.inCedula.value !== "" && parseFloat(this.inCedula.value) > 0;

            // Campos validos
                let camposValidos = false;

                    if (tipo === "fijo") {
                        const sueldoValido = this.inFechaN.value !== "" && parseFloat(this.inFechaN.value) > 0; 
                    
                            camposValidos = sueldoValido;    }

                    else if (tipo === "contratado") {
                        const horasValidas = this.inCurso.value !== "" && parseFloat(this.inCurso.value) > 0;

                            camposValidos = horasValidas;     }

                    // Si no hay Nada Seleccionado Entonces
                        else {  camposValidos = false;    }

                    // Si se cumplen Condiciones Entonces...
                        const todoValido = nombreValido && bonoValido && camposValidos;

                    // Desactivar Boton Si no Cumple algo 
                        this.btAceptar.disabled = !todoValido;

                    if (todoValido) {
                        this.btAceptar.style.opacity = "1";
                        this.btAceptar.style.cursor = "pointer";    }

                    else {
                        this.btAceptar.style.opacity = "0.5";
                        this.btAceptar.style.cursor = "not-allowed"     }
                    
        }

    get nombre(): string {
        return this.inNombre.value; }

    get bono(): number {
        return +this.inCedula.value;  }

    get tipo(): string {
        return this.inSexo.value;   }

    get sueldo(): number {
        return +this.inFechaN.value;}

    get horas(): number{
        return +this.inCurso.value; }

    onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;   }

    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;  }

    mostrar(): void {
        this.modal.show();
            this.inNombre.value = "";
            this.inCedula.value = "";
            this.inSexo.value = "";
            this.inFechaN.value = "";
            this.inCurso.value = "";
            this.actualizarCampos();
            this.validarBoton();
        }

    ocultar(): void {
        this.modal.hide();
    }
}*/