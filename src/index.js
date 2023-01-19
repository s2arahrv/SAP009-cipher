import cipher from './cipher.js';
//Chamar botão do HTML
const inputButton = document.getElementById("encodeBt");
//Dar a ele a função encodeMessage quando for clicado
inputButton.addEventListener("click", encodeMessage);
 function encodeMessage()  {
//Chamar elemento offset, string, conectar cipher.encode a encodeMessage e estabelecer onde aparecerá a mensagem final
    const offset = Number(document.getElementById("offsetNum").value);
    const string = document.getElementById("input").value;
    const encodeResult = cipher.encode(offset, string);
    const showResult = document.getElementById("outputArea");

    console.log(encodeResult);
    //return showResult.innerHTML = encodeResult;
};
//console.log(cipher.encode);
