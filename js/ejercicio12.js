const numeroRandom =  Math.ceil(Math.random() * 10)
let numeroUsuario = ""

function pedirNumeroUsuario() {
    let numeroUsuario = parseInt(prompt("Adivine el número aleatorio del 1 al 10."))
    return numeroUsuario
}

function adivinarNumero() {
    for (i = 1; i < 10; i++) {
        let numeroUsuario = pedirNumeroUsuario();
        if (numeroUsuario === 0 || numeroUsuario > 10) {
            alert("Ingrese un número válido del 1 al 10.")
        }
        else if (numeroUsuario === numeroRandom) {
            alert("Felicidades! Adivinaste el número.");
            return;
        }
        else if (numeroUsuario < numeroRandom) {
            alert("No pudiste adivinarlo. Elija otro número más grande.")
        }
        else if (numeroUsuario > numeroRandom) {
            alert("No pudiste adivinarlo. Elija otro número más pequeño.")
        }
    }
}

adivinarNumero();
