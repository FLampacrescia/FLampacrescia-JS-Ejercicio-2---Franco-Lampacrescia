const numeroUsuario = parseInt(prompt("Ingrese los numeros deseados"));

function separarInput(input) {
    let convertirAString = input.toString();
    let inputSeparado = convertirAString.split("");
    return inputSeparado;
}
function invertirInput(input) {
    let inputInvertido = separarInput(input).reverse()
    return inputInvertido;
}
function unirInput(input) {
    let resultado = parseInt(invertirInput(input).join(""))
    return console.log(resultado)
}

unirInput(numeroUsuario)
