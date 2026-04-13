const inputProducto = document.querySelector('#input-producto');
const btnAgregar = document.querySelector('#btn-agregar');
const listaProductos = document.querySelector('#lista-productos');
const contador = document.querySelector('#contador');
const mensajeError = document.querySelector('#mensaje-error');

let cantidadProductos = 0;

function actualizarContador() {
    contador.textContent = `${cantidadProductos} productos en la lista`;
}

btnAgregar.addEventListener('click', () => {
    const nombreProducto = inputProducto.value.trim();
    mensajeError.textContent = "";

    if (nombreProducto === "") {
        mensajeError.textContent = "El nombre del producto no puede estar vacío.";
        return;
    }

    const li = document.createElement('li');
    li.textContent = nombreProducto + " ";

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener('click', () => {
        listaProductos.removeChild(li);
        cantidadProductos--;
        actualizarContador();
    });

    li.appendChild(btnEliminar);
    listaProductos.appendChild(li);

    cantidadProductos++;
    actualizarContador();

    inputProducto.value = "";
    inputProducto.focus();
});