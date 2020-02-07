class Controlador {
    constructor(modelo){
        this.modelo = modelo;
    }
    agregar( asistente ){
        modelo.agregar(asistente);
    }
    obtenterAsistentes (){
        return this.modelo.obtenerAsistentes();
    }
}

export default Controlador