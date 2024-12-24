const arrayNumeros = [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9]

for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > 0) {
        console.log(arrayNumeros[i]);
        document.write(`${arrayNumeros[i]} <br>`);
    }
}