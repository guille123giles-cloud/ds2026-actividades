const numeros = [15, 42, 8, 99, 23, 4, 76, 50];

let suma = 0;
let mayor = numeros[0];
let menor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
    
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

let promedio = suma / numeros.length;

console.log(`Array: [${numeros}]`);
console.log(`Suma total: ${suma}`);
console.log(`Promedio: ${promedio}`);
console.log(`Número mayor: ${mayor}`);
console.log(`Número menor: ${menor}`);

function generarAsteriscos(n) {
    let resultado = "";
    for (let i = 0; i < n; i++) {
        resultado += "*";
    }
    return resultado;
}

console.log(`Asteriscos (5): ${generarAsteriscos(5)}`);
console.log(`Asteriscos (10): ${generarAsteriscos(10)}`);