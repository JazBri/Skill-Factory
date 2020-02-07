/*var nombre, apellido;
var titulo= "Sr";
nombre = "Juan";
apellido="Gonzalez";


function saludar(nombre, apellido){
    console.log("Hola " + titulo + " " + nombre + " " + apellido);
}

/*
function saludar(nombre, apellido){
    console.log("Hola " + nombre, apellido);
}
*/ 
/*
saludar(nombre, apellido);

*/

/*function calcularFecha(fechaDeNacimiento){
    console.log("Edad actual", 2020-fechaDeNacimiento);
}

var fechaDeNacimiento = prompt ("Año de Nacimiento: ");

calcularFecha(fechaDeNacimiento);
console.log(fechaDeNacimiento);
*/



var fechaHoy= new Date();

function calcular(mes, dia, anio){
    var edad =2020-anio;    
    if ((fechaHoy.getMonth() < (mes)) || (fechaHoy.getDate < (dia))) {    
        edad--;
    } 
      console.log(edad);
}

var dia =prompt("Día");
var mes =prompt("Mes");
var anio =prompt("Año");
console.log(dia);
console.log(mes);
console.log(anio);

calcular(dia, mes, anio);





