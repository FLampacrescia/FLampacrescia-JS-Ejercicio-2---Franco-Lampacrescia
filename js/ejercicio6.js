const cantidadFilas = parseInt(prompt("Ingrese la cantidad de filas para generar el triángulo."))

let triangulo = ""

for (let i = cantidadFilas; i > 0; i--) {
    triangulo += "*".repeat(i) + "\n";
}

console.log(triangulo)