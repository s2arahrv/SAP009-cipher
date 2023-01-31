const cipher = {
// Criar função encode
  encode : function(offset, string) {
    // Devolver erro se offset for null
    if (!offset){ 
      throw new TypeError();
    }
    // Variável da mensagem final
    let result = "";
    // Encontrar código ASC das letras do alfabeto
    // Loop por todas as letras da mensagem, encontrando o código de cada uma
    for (let i = 0; i < string.length; i++){
      const cipherCode = string.charCodeAt(i);
      // const cipherCode = cipherUppercase.charCodeAt(i);
      /* Executar ((codigoDaLetra - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra, 
retornar String dos códigos unicode e adicioná-la ao output final */      
      if (cipherCode >= 65 && cipherCode <= 90) {
        result +=  String.fromCharCode(((cipherCode - 65 + offset) % 26) + 65); 
      } else if (cipherCode >= 97 && cipherCode <= 122) {
        result +=  String.fromCharCode(((cipherCode - 97 + offset) % 26) + 97);
      } else {
        result += string.charAt(i);
      }
    } return result
  },

  // Criar função decode
  decode : function(offset, string) {
    //Devolver erro se offset for null
    if (!offset){ 
      throw new TypeError();
    }
    // Variável da mensagem final (decodificada)
    let decodeResult = "";
    // Loop por todas as letras da mensagem, encontrando o código (codificado) de cada uma
    for (let i = 0; i < string.length; i++){
      const cipherEncoded = string.charCodeAt(i);
      //Executar ((codigoDaLetra + cod1aLetra - desloc) % tamDoAlfabeto) - cod1aLetra
      if (cipherEncoded >= 65 && cipherEncoded <= 90) {
        decodeResult += String.fromCharCode(((cipherEncoded + 65 - offset) % 26) + 65); 
      } else if (cipherEncoded >= 97 && cipherEncoded <= 122) {
        decodeResult += String.fromCharCode(((cipherEncoded - 122 - offset) % 26) + 122); 
      } else {
        decodeResult += string.charAt(i);
      }
    } return decodeResult;
  }
};
export default cipher;
 

//((codigoDaLetra - 97 + desloc) % 26) + 97
//Alfabeto minúsculo código: 97 a 122;