const cipher = {
//Criar função encode
  encode : function(offset, string) {
//Variável da mensagem final
let result = "";
//Encontrar código ASC das letras do alfabeto
//Loop por todas as letras da mensagem, encontrando o código de cada uma
  for (let i = 0; i < string.length; i++){
    const cipherUppercase = string.toUpperCase();
    const cipherCode = cipherUppercase.charCodeAt(i);
/*Executar ((codigoDaLetra - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra, 
retornar String dos códigos unicode e adicioná-la ao output final*/      
    result +=  String.fromCharCode(((cipherCode - 65 + offset) % 26) + 65);
      } return result
  },

//Criar função decode
  decode : function(offset, string) {
//Variável da mensagem final (decodificada)
let decodeResult = "";
//Loop por todas as letras da mensagem, encontrando o código (codificado) de cada uma
    for (let i = 0; i < string.length; i++){
      const cipherEncoded = string.charCodeAt(i);
//Executar ((codigoDaLetra + cod1aLetra - desloc) % tamDoAlfabeto) - cod1aLetra
      decodeResult += String.fromCharCode(((cipherEncoded + 65 - offset) % 26) + 65);
      //Retornar string dos códigos unicode e adicioná-ça ao output final
    } return decodeResult;
  }
};
export default cipher;
 











/*encode : function(offset, string) {
    string = document.getElementById("input").value.toUpperCase();
    offset = (letterPosition + 3) % 26;

    for (let i = 0; i < string.length; i++){
      const letterPosition = string.charCodeAt(i)-65;
      return letterPosition + offset + 65;
    }
    document.getElementById("output").innerHTML = encode(offset, string);
  },*/