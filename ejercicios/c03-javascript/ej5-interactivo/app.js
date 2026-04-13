const inputAltura = document.querySelector('#input-altura');
const btnGenerar = document.querySelector('#btn-generar');
const mensajeError = document.querySelector('#mensaje-error');
const resultado = document.querySelector('#resultado');

btnGenerar.addEventListener('click', () => {
    mensajeError.textContent = "";
    resultado.textContent = "";

    const valor = inputAltura.value;
    const altura = parseInt(valor);

    if (valor === "" || altura < 1) {
        mensajeError.textContent = "Error: Ingrese un número válido mayor o igual a 1.";
        return;
    }

    let arbol = "";
    for (let i = 1; i <= altura; i++) {
        arbol += "*".repeat(i) + "\n";
    }

    resultado.textContent = arbol;
});