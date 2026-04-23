// I_vInscrito.ts

export interface I_vInscrito {

    // Aqui colocamos los atributos de la Clase menor
        get nombre(): string;
        get cedula(): number;
        get sexo(): string;
        get curso(): string;
        get fechaN(): string;

        mostrar(): void;
        ocultar(): void;

    // Botones de Aceptar y Cancelar
        onAceptar(callback: () => void): void;
        onCancelar(callback: () => void): void;
        
}