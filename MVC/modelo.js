class Modelo {
    constructor(){
        this.asistentesPredeterminados = [
            ["juan", "juan@hotmail.con", "28"
        ]
    }

    agregar(asistente){
        this.asistentesPredeterminados(asistente);
    }
    obtenerAsistentes(){
        return this.asistentesPredeterminados;
    }
}

export default Modelo