let numeroUsuario = parseInt(prompt("Ingrese un número del 1 al 100:"));

if (numeroUsuario >= 1 && numeroUsuario <= 100) {
    console.log(`Tabla de multiplicar del ${numeroUsuario}:`);
    
    for (let i = 1; i <= 1000; i++) {
        let resultadoFinal = numeroUsuario * i;

        console.log(`${numeroUsuario} x ${i} = ${resultadoFinal}`);
        
        if (resultadoFinal >= 1000) {
            console.log("El resultado es mayor a 1000.");
            break;
        }
    }
} else {
    console.log("Ingrese un número válido entre 1 y 100.");
}