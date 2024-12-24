const fizz = "Fizz"
const buzz = "Buzz"
let resultado = "";

for(i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        resultado = fizz + buzz;
    }
    else if (i % 3 === 0) {
        resultado = fizz
    }
    else if (i % 5 === 0) {
        resultado = buzz
    }
    else {
        resultado = i
    }
    console.log(resultado)
}