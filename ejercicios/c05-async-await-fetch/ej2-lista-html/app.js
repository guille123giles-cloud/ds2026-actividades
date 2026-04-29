"use strict";
// Obtenemos las referencias a los elementos del DOM
const cargandoEl = document.getElementById('cargando');
const errorEl = document.getElementById('error');
const listaUsuariosEl = document.getElementById('lista-usuarios');
async function cargarUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        const usuarios = await respuesta.json();
        cargandoEl.style.display = 'none';
        // Mostramos los usuarios en la lista, cada <li> con nombre y email
        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `${usuario.name} - ${usuario.email}`;
            listaUsuariosEl.appendChild(li);
        });
    }
    catch (error) {
        cargandoEl.style.display = 'none';
        errorEl.textContent = 'Ocurrió un error al cargar los datos del servidor.';
        errorEl.style.display = 'block';
    }
}
cargarUsuarios();
