
function btnEncriptar (){
    let encriptar = document.getElementById("input-texto").value;
    let encriptado = encriptar.replace(/e/ig, "enter"). replace(/i/ig, "imes").replace(/a/ig, "ai").replace(/o/ig, "ober").replace(/u/ig, "ufat");
    document.getElementById("msg").value = encriptado;
    document.getElementById("input-texto").value=" ";

}

function btnDesencriptar(){
    let desencriptar = document.getElementById('input-texto').value;
    let desencriptado = desencriptar.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("msg").value = desencriptado
    document.getElementById("input-texto").value=" ";
}

function btnCopiar(){
    const mensajeCopiado = document.getElementById("msg");
    mensajeCopiado.select();
    document.execCommand("copy");
    document.getElementById("msg").value=" ";
}




