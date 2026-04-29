"use strict";
const inputBusqueda = document.getElementById('input-busqueda');
const btnBuscar = document.getElementById('btn-buscar');
const divResultados = document.getElementById('resultados');
const msjError = document.getElementById('mensaje-error');
const msjCargando = document.getElementById('cargando');
btnBuscar.addEventListener('click', async () => {
    const query = inputBusqueda.value.trim();
    if (query === '') {
        msjError.textContent = 'El campo de búsqueda no puede estar vacío.';
        msjError.style.display = 'block';
        divResultados.innerHTML = '';
        return;
    }
    msjError.style.display = 'none';
    divResultados.innerHTML = '';
    msjCargando.style.display = 'block';
    try {
        const respuesta = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
        if (!respuesta.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        const data = await respuesta.json();
        const libros = data.docs;
        msjCargando.style.display = 'none';
        if (libros.length === 0) {
            divResultados.innerHTML = '<p>No se encontraron resultados.</p>';
            return;
        }
        const primeros10 = libros.slice(0, 10);
        primeros10.forEach(libro => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta';
            const titulo = libro.title;
            const autor = libro.author_name ? libro.author_name.join(', ') : 'Autor desconocido';
            const anio = libro.first_publish_year ? libro.first_publish_year : 'Año desconocido';
            tarjeta.innerHTML = `
                <h3>${titulo}</h3>
                <p><strong>Autor(es):</strong> ${autor}</p>
                <p><strong>Año de publicación:</strong> ${anio}</p>
            `;
            divResultados.appendChild(tarjeta);
        });
    }
    catch (error) {
        msjCargando.style.display = 'none';
        msjError.textContent = 'Ocurrió un error al realizar la búsqueda en Open Library.';
        msjError.style.display = 'block';
    }
});
