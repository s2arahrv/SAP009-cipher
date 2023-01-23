import cipher from './cipher.js';
//Função encode:
//Chamar botão do HTML
const inputButton = document.getElementById("encodeBt");
//Dar a ele a função encode quando for clicado
inputButton.addEventListener("click", encodeMessage);
    function encodeMessage()  {
//Chamar elemento offset, string, conectar cipher.encode a encodeMessage e estabelecer onde aparecerá a mensagem final
        const offset = Number(document.getElementById("encodeOffset").value);
        const string = document.getElementById("input").value;
        const encodeResult = cipher.encode(offset, string);
        const showResult = document.getElementById("output");

    return showResult.innerHTML = encodeResult;
};
//Função decode:
//Chamar botão do HTML
const decodeButton = document.getElementById("decodeBt");
//Dar a ele a função decodeMessage quando for clicado
decodeButton.addEventListener("click", decodeMessage);
    function decodeMessage() {
//Chamar elemento offset, string, conectar cipher.decode a encodeMessage e estabelecer onde aparecerá a mensagem final
        const offset = Number(document.getElementById("decodeOffset").value);
        const string = document.getElementById("output").value;
        const decodeResult = cipher.decode(offset, string);
        const showDecodeResult = document.getElementById("input");

    return showDecodeResult.innerHTML = decodeResult;
};

//console.log(encodeResult);
