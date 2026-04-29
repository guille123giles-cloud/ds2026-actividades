interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

async function obtenerUsuarios(): Promise<Usuario[]> {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        const data = await respuesta.json();
        return data as Usuario[];
    } catch (error) {
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