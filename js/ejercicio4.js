const palabraUsuario = prompt("Ingresa una palabra:").toLowerCase();

let contadorVocales = 0;

const vocales = ["a", "e", "i", "o", "u"];

for (let i = 0; i < palabraUsuario.length; i++) {
    if (vocales.includes(palabraUsuario[i])) {
        contadorVocales++;
    }
}

console.log(`La palabra ingresada "${palabraUsuario}" tiene ${contadorVocales} vocales.`)
document.write(`La palabra ingresada "${palabraUsuario}" tiene ${contadorVocales} vocales.`)
