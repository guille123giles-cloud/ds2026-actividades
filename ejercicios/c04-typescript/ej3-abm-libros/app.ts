interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

let catalogo: Libro[] = [
    { isbn: "978-01", titulo: "1984", autor: "George Orwell", precio: 15000, disponible: true, genero: "Ficción" },
    { isbn: "978-02", titulo: "El Aleph", autor: "Jorge Luis Borges", precio: 18000, disponible: false },
    { isbn: "978-03", titulo: "Fahrenheit 451", autor: "Ray Bradbury", precio: 12000, disponible: true, genero: "Ciencia Ficción" }
];

function buscarPorAutor(autorBusqueda: string): Libro[] {
    return catalogo.filter(libro => 
        libro.autor.toLowerCase().includes(autorBusqueda.toLowerCase())
    );
}

function librosDisponibles(): Libro[] {
    return catalogo.filter(libro => libro.disponible);
}

function precioPromedio(libros: Libro[]): number {
    if (libros.length === 0) return 0;
    const sumaTotal = libros.reduce((total, libro) => total + libro.precio, 0);
    return sumaTotal / libros.length;
}

function agregarLibro(libro: Libro): void {
    catalogo.push(libro);
    renderizar(catalogo);
}

function eliminarLibro(isbn: string): void {
    catalogo = catalogo.filter(libro => libro.isbn !== isbn);
    renderizar(catalogo);
}

const inputTitulo = document.getElementById('inputTitulo') as HTMLInputElement;
const inputAutor = document.getElementById('inputAutor') as HTMLInputElement;
const inputPrecio = document.getElementById('inputPrecio') as HTMLInputElement;
const inputGenero = document.getElementById('inputGenero') as HTMLInputElement;
const inputDisponible = document.getElementById('inputDisponible') as HTMLInputElement;
const btnAgregar = document.getElementById('btnAgregar') as HTMLButtonElement;
const divErrorForm = document.getElementById('errorForm') as HTMLDivElement;

const ulListado = document.getElementById('listado') as HTMLUListElement;
const pStats = document.getElementById('stats') as HTMLParagraphElement;
const inputFiltro = document.getElementById('filtroAutor') as HTMLInputElement;
const btnFiltrar = document.getElementById('filtrar') as HTMLButtonElement;
const btnDisponibles = document.getElementById('mostrarDisponibles') as HTMLButtonElement;
const btnTodos = document.getElementById('mostrarTodos') as HTMLButtonElement;

function validarFormulario(): Libro | null {
    const titulo = inputTitulo.value.trim();
    const autor = inputAutor.value.trim();
    const precio = parseFloat(inputPrecio.value);
    const genero = inputGenero.value.trim();
    const disponible = inputDisponible.checked;

    if (titulo === '' || autor === '' || isNaN(precio) || precio <= 0) {
        return null;
    }

    const nuevoLibro: Libro = {
        isbn: "AUTO-" + Date.now(),
        titulo: titulo,
        autor: autor,
        precio: precio,
        disponible: disponible,
        genero: genero !== '' ? genero : undefined
    };

    return nuevoLibro;
}

function renderizar(librosParaMostrar: Libro[]): void {
    ulListado.innerHTML = '';

    librosParaMostrar.forEach(libro => {
        const li = document.createElement('li');
        li.textContent = `[${libro.isbn}] ${libro.titulo} - ${libro.autor} ($${libro.precio}) | Disponible: ${libro.disponible ? 'Sí' : 'No'} `;
        
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.style.marginLeft = '15px';
        btnEliminar.addEventListener('click', () => {
            eliminarLibro(libro.isbn);
        });

        li.appendChild(btnEliminar);
        ulListado.appendChild(li);
    });

    const promedio = precioPromedio(librosParaMostrar);
    pStats.textContent = `Mostrando ${librosParaMostrar.length} libros. Precio promedio: $${promedio.toFixed(2)}`;
}

btnAgregar.addEventListener('click', () => {
    const nuevoLibro = validarFormulario();
    
    if (nuevoLibro === null) {
        divErrorForm.textContent = 'Revisa que los campos obligatorios no estén vacíos y el precio sea mayor a 0.';
    } else {
        divErrorForm.textContent = '';
        agregarLibro(nuevoLibro);
        
        inputTitulo.value = '';
        inputAutor.value = '';
        inputPrecio.value = '';
        inputGenero.value = '';
        inputDisponible.checked = false;
    }
});

btnFiltrar.addEventListener('click', () => {
    renderizar(buscarPorAutor(inputFiltro.value));
});

btnDisponibles.addEventListener('click', () => {
    renderizar(librosDisponibles());
});

btnTodos.addEventListener('click', () => {
    renderizar(catalogo);
    inputFiltro.value = '';
});

renderizar(catalogo);