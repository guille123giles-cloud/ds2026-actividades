interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

// Obtenemos las referencias a los elementos del DOM
const cargandoEl = document.getElementById('cargando') as HTMLParagraphElement;
const errorEl = document.getElementById('error') as HTMLParagraphElement;
const listaUsuariosEl = document.getElementById('lista-usuarios') as HTMLUListElement;

async function cargarUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        const usuarios: Usuario[] = await respuesta.json();
        
        cargandoEl.style.display = 'none';
        
        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `${usuario.name} - ${usuario.email}`;
            listaUsuariosEl.appendChild(li);
        });

    } catch (error) {
        cargandoEl.style.display = 'none';
        errorEl.textContent = 'Ocurrió un error al cargar los datos del servidor.';
        errorEl.style.display = 'block';
    }
}

cargarUsuarios();