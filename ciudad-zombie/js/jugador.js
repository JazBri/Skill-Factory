/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,

  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  mover: function(movX, movY) {
    //Si el mov de x es mayor a 0, es decir, que se apreto la flecha de teclado derecha, ya que esta suma velocidad, va a la derecha
    if (movX > 0) {
      //Vuelvo a definir esto para que la imagen se muestre correctamente
      this.ancho=30;
      this.alto=15;
      this.sprite = "imagenes/auto_rojo_derecha.png";
    } else if (movY > 0) { //LO mismo que arriba
      this.ancho=15;
      this.alto=30;
      this.sprite = "imagenes/auto_rojo_abajo.png";
    } else if (movX < 0) { //Si el movX es menor a 0, se apreto la izquierda ya que esta resta la velocidad entonces queda -10
      this.ancho=30;
      this.alto=15;
      this.sprite = "imagenes/auto_rojo_izquierda.png";
    } else if (movY < 0) { //LO mismo que arriba
      this.ancho=15;
      this.alto=30;
      this.sprite = "imagenes/auto_rojo_arriba.png";
    }
    //Los nuevos valores con el movimiento
    this.x += movX;
    this.y += movY;
  },
  perderVidas: function(vidasPerdidas){
    this.vidas = this.vidas - vidasPerdidas;
    console.log(this.vidas);
  }
}



