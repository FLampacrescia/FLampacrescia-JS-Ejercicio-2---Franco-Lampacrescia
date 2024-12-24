const numeros = [23, 45, 12, 67, 34, 89, 21];

let numeroMasAlto = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasAlto) {
        numeroMasAlto = numeros[i];
    }
}

console.log(`El número más alto es ${numeroMasAlto}`);
document.write(`El número más alto es ${numeroMasAlto}`);