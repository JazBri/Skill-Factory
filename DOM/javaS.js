

var login = {
    mail :"abc@gmail.com",
    passw: 1234
}
/*
async function readJson() {
    try {
        config = {
            method: "GET"
        }
        var response = await fetch("json.file:///home/jazmin/skill-factory/DOM/index.html", config)
        var data = await response.json()
        return data


    } catch (error) {
        throw(error)
    }
}
*/

/*  function readJson(){
    fetch("json.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
    });
    }
    var formData = new FormData();
    var fileField = document.querySelector("input[type='file']");

formData.append('username', 'abc123');


fetch("'https://example.com/profile/avatar'", {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
*/





function validarContraseña(pass, pass2){
    if((pass!= 0) &&(pass == pass2)){
        alert("Bienvenido!!!");
    }else{
        alert("Las contraseñas no coinciden");
    }
}

function validarEmail(mail, pass, pass2){
    if((mail!=0)){
  //  for(i = 0; i < email.l)  
    
        validarContraseña(pass, pass2)
    }else{
        alert("ingrese un mail valido");
    }
}



function validarPass(){
  //  var email = [abc, 123, 456];
    const mail = document.getElementById("mail").value;
    const pass = document.getElementById("pass").value;
    const pass2 = document.getElementById("pass2").value;
    validarEmail( mail, pass, pass2);
}


/*
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("eliminar").addEventListener("click", eliminarItem)
})


function eliminarItem(event ){
    const lista = document.getElementById("lista")
    const items = document.getElementsByClassName("elementos")
    const itemELiminado= lista.removeChild(items[0])
    console.log("Elminiar item", event);
    console.log("Elminiar item", event.target);
}
*/