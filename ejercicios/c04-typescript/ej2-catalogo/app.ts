interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

const catalogo: Libro[] = [
    { isbn: "978-01", titulo: "1984", autor: "George Orwell", precio: 15000, disponible: true, genero: "Ficción" },
    { isbn: "978-02", titulo: "El Aleph", autor: "Jorge Luis Borges", precio: 18000, disponible: false },
    { isbn: "978-03", titulo: "Fahrenheit 451", autor: "Ray Bradbury", precio: 12000, disponible: true, genero: "Ciencia Ficción" },
    { isbn: "978-04", titulo: "Ficciones", autor: "Jorge Luis Borges", precio: 16500, disponible: true }
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

const ulListado = document.getElementById('listado') as HTMLUListElement;
const pStats = document.getElementById('stats') as HTMLParagraphElement;
const inputFiltro = document.getElementById('filtroAutor') as HTMLInputElement;
const btnFiltrar = document.getElementById('filtrar') as HTMLButtonElement;
const btnDisponibles = document.getElementById('mostrarDisponibles') as HTMLButtonElement;
const btnTodos = document.getElementById('mostrarTodos') as HTMLButtonElement;

function renderizar(librosParaMostrar: Libro[]): void {
    ulListado.innerHTML = '';

    librosParaMostrar.forEach(libro => {
        const li = document.createElement('li');
        li.textContent = `[${libro.isbn}] ${libro.titulo} - ${libro.autor} ($${libro.precio}) | Disponible: ${libro.disponible ? 'Sí' : 'No'}`;
        ulListado.appendChild(li);
    });

    const promedio = precioPromedio(librosParaMostrar);
    pStats.textContent = `Mostrando ${librosParaMostrar.length} libros. Precio promedio: $${promedio.toFixed(2)}`;
}

btnFiltrar.addEventListener('click', () => {
    const valorInput = inputFiltro.value;
    const filtrados = buscarPorAutor(valorInput);
    renderizar(filtrados);
});

btnDisponibles.addEventListener('click', () => {
    renderizar(librosDisponibles());
});

btnTodos.addEventListener('click', () => {
    renderizar(catalogo);
    inputFiltro.value = '';
});

renderizar(catalogo);