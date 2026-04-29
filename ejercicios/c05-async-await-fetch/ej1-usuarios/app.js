"use strict";
async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        const data = await respuesta.json();
        return data;
    }
    catch (error) {
        // Manejo de errores [cite: 186]
        console.error("Hubo un problema con la petición Fetch:", error);
        return [];
    }
}
obtenerUsuarios().then(usuarios => {
    usuarios.forEach(usuario => {
        console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`);
    });
});
