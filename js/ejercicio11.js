const inputUsuario = prompt("Ingrese varias palabras separadas por una coma"); 
const arrayPalabras = inputUsuario.split(",");

function separarPalabra(palabra) {
    let resultado = palabra.trim();
    return resultado.split("");
}

function esPalindroma(palabra) {
    let palabraSeparada = separarPalabra(palabra);
    let palabraInvertida = [...palabraSeparada].reverse();
    return palabraInvertida.join("") === palabraSeparada.join("");
}

for (let i = 0; i < arrayPalabras.length; i++) {
    const palabra = arrayPalabras[i];
    const resultado = esPalindroma(palabra) ? `La palabra "${palabra.trim()}" es palíndroma.` : `La palabra "${palabra.trim()}" no es palíndroma.`;
    console.log(resultado);
}

