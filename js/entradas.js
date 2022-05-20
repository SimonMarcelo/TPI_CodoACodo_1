
function chequearFormulario(){
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let email = document.querySelector("#email").value;
    let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ((email == "") || (nombre == "") || (apellido == "")) {  //COMPRUEBA CAMPOS VACIOS
        alert("Los campos no pueden quedar vacios");
        formularioCompleto = false;
        return;
    }
    else if ( !expr.test(email) ){                              //COMPRUEBA MAIL
        alert('Error: La dirección de correo "' + email + '" es incorrecta.');
        formularioCompleto = false;
        return;
    }
    else{
        formularioCompleto = true;
    };
}

var botonResumen = document.querySelector("#boton-resumen");
botonResumen.addEventListener("click", function(cantidadEntradas,categoriaEntrada){
    let formularioCompleto = true;
    chequearFormulario();
    if(formularioCompleto == true){
        var categoriaEntrada = document.querySelector("#inputState");
        var cantidadEntradas = document.querySelector("#cantidad");
        var totalAPagar = document.querySelector("#valor-total");
        let entradas = cantidadEntradas.value;
        let categoria = categoriaEntrada.value;
        let valorEntradaGeneral = 200;
        let descuentoEstudiante = 0.2;
        let descuentoTrainee = 0.5;
        let descuentoJunior = 0.85;
        let valorTotal;
        switch (categoria) {
            case 'General':
                valorTotal = entradas * valorEntradaGeneral;
                break;

            case 'Estudiante':
                valorTotal = entradas * (valorEntradaGeneral * descuentoEstudiante);
                break;

            case 'Trainee':
                valorTotal = entradas * (valorEntradaGeneral * descuentoTrainee);
                break;

            case 'Junior':
                valorTotal = entradas * (valorEntradaGeneral * descuentoJunior);
                break;
        }
        totalAPagar.value = "Total a Pagar: $" + valorTotal;
    }
});