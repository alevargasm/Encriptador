//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function asignarMensaje() {
    document.getElementById("mensajeSalida").innerHTML = "Este mensaje deberia aparecern en pantalla";
}
/*function cambiarElemento(t1){
 
    var p = document.getElementById('mensajeSalida');
    var p1= document.createElement('p');
    p.innerHTML = 'p1';
    elementoAntiguo.parentNode.replaceChild(p, p1);
 
    //<elementoantiguo id='elemento origen'> elemento original</elementoantiguo>>
}*/

function encriptarTexto() {
    var texto = document.getElementById("inputMensaje").value;
    var mensajeCodificado = '';
    for (var i = 0; i < texto.length; i++) {

        var letra = texto[i];
        switch (letra) {

            case 'a':
                mensajeCodificado = mensajeCodificado + 'ai';
                break;

            case 'e':
                mensajeCodificado = mensajeCodificado + 'enter';
                break;

            case 'i':
                mensajeCodificado = mensajeCodificado + 'imes';
                break;

            case 'o':
                mensajeCodificado = mensajeCodificado + 'ober';
                break;

            case 'u':
                mensajeCodificado = mensajeCodificado + 'ufat';
                break;

            default:
                mensajeCodificado = mensajeCodificado + letra;
                break;

        }
    }
    asignarMensaje();
    console.log(mensajeCodificado)
}

function desencriptarTexto() {
    var texto = document.getElementById("inputMensaje").value;
    console.log(texto + " texto introducido");
    var mensajeDecodificado = '';
    texto = texto.replace(/ai/gi, 'a');
    texto = texto.replace(/enter/gi, 'e');
    texto = texto.replace(/imes/gi, 'i');
    texto = texto.replace(/ober/gi, 'o');
    texto = texto.replace(/ufat/gi, 'u');
    /*for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        var tamanhoSubtexto = 0;
        switch (letra) {
            case 'a':
                console.log(texto.substring(i, i + 1));
                if ((texto.substring(i, i + 1) == 'ai')) {
                    mensajeDecodificado = mensajeDecodificado + 'a';
                }
                break;
            case 'e':
                if (texto.substring(i, i + 4) == 'enter') {
                    mensajeDecodificado = mensajeDecodificado + 'e';
                }
                break;
            case 'i':
                if (texto.substring(i, i + 3) == 'imes') {
                    mensajeDecodificado = mensajeDecodificado + 'i';
                }
                break;
            case 'o':
                if (texto.substring(i, i + 3) == 'ober') {
                    mensajeDecodificado = mensajeDecodificado + 'o';
                }
                break;
            case 'u':
                if (texto.substring(i, i + 3) == 'ufat') {
                    mensajeDecodificado = mensajeDecodificado + 'u';
                }
                break;
            default:
                mensajeCodificado = mensajeCodificado + letra;
                break;
        }
    }*/
    asignarMensaje(texto);
}

function copiarResultado() {
    const mensajeResultante = document.getElementById("mensajeEncriptado").value;
    navigator.clipboard.writeText(mensajeResultante);
}
        /*
<link rel="stylesheet" href="reset.css">
<link rel="stylesheet" href="style.css">
<textarea cols="100" rows="10" id="mensajeEncriptado" class="outputMensaje"></textarea>
*/