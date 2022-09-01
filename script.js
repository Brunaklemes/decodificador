const input = document.querySelector(".input");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(input.value)
    mensagem.value = textoEncriptado;
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length;i++ ){
        if(stringEncriptada.includes(matrizCodigo[i][0])){ 
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(input.value)
    mensagem.value = textoDesencriptado

}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length;i++ ){
        if(stringDesencriptada.includes(matrizCodigo[i][01])){ 
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function copiar(){
        var copyText = mensagem.value;
      
         navigator.clipboard.writeText(copyText.value);
       
        alert("Seu código criptografado foi copiado! Volte sempre!");
      }