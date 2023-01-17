const cipher = {
  encode : function(offset, string) {
    string = document.getElementById("input").value.toUpperCase();
    const offset = (letterPosition + 3) % 26;

    for (let i = 0; i < string.length; i++){
      const letterPosition = string.charCodeAt(i)-65;
      return letterPosition + offset + 65;
    }
    document.getElementById("output").innerHTML = encode(offset, string);
  }
};
// (codigoDaLetra - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra//

export { cipher };