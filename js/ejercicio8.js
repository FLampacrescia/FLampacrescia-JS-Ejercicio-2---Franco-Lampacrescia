let numeroTotal = 0;

while (numeroTotal <= 100) {
    let numeroUsuario = parseInt(prompt("Ingrese un número"));
    numeroTotal += numeroUsuario
    if (numeroTotal >= 101){
        break
    }
    console.log(numeroTotal)
}