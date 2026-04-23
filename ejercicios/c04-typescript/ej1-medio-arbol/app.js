"use strict";
// 1. Tipamos la función: recibe un 'number' y devuelve un 'string'
function generarAsteriscos(filas) {
    let arbolito = "";
    for (let i = 1; i <= filas; i++) {
        arbolito += "*".repeat(i) + "\n";
    }
    return arbolito;
}
// 2. Capturamos los elementos del DOM y les asignamos su tipo (Casting)
const inputFilas = document.getElementById('filas');
const btnGenerar = document.getElementById('generar');
const preResultado = document.getElementById('resultado');
// 3. Evento del botón
btnGenerar.addEventListener('click', () => {
    // Obtenemos el valor del input y lo convertimos a número
    const cantidad = parseInt(inputFilas.value);
    // Validamos que sea un número válido
    if (!isNaN(cantidad) && cantidad > 0) {
        preResultado.textContent = generarAsteriscos(cantidad);
    }
    else {
        preResultado.textContent = "Por favor, ingresa un número válido.";
    }
});
