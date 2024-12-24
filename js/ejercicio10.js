const edades = [18, 25, 14, 32, 16, 40];

for (i = 0; i < edades.length; i++) {
    const edad = edades[i]
    const mayorDeEdad = (edad >= 18)
    const resultado = mayorDeEdad ? `${edad} es mayor de edad` : `${edad} es menor de edad`
    console.log(resultado)
}


