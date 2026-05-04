document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const resultadosDiv = document.getElementById("resultados");

    // Validamos que el formulario exista en la página actual (para no tirar error en el index.html)
    if (searchForm) {
        searchForm.addEventListener("submit", async (e) => {
            e.preventDefault(); // Evitamos que la página se recargue
            
            const query = searchInput.value.trim();
            if (!query) return;

            // Mostramos un mensaje de carga mientras espera la API
            resultadosDiv.innerHTML = `
                <div class="col-12 text-center">
                    <div class="spinner-border text-primary" role="status"></div>
                    <p class="mt-2">Buscando libros...</p>
                </div>
            `;

            try {
                // Llamamos a la API de Open Library
                const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=9`);
                const data = await response.json();

                // Limpiamos el contenedor
                resultadosDiv.innerHTML = "";

                // Si no hay resultados
                if (data.docs.length === 0) {
                    resultadosDiv.innerHTML = '<div class="col-12 text-center"><p>No se encontraron resultados para tu búsqueda.</p></div>';
                    return;
                }

                // Recorremos los libros y armamos las cards de Bootstrap
                data.docs.forEach(book => {
                    const title = book.title || "Título desconocido";
                    const author = book.author_name ? book.author_name[0] : "Autor desconocido";
                    
                    // Verificamos si tiene portada, si no, le ponemos un placeholder
                    const coverUrl = book.cover_i 
                        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
                        : "https://via.placeholder.com/300x400?text=Sin+Portada";

                    // Plantilla HTML de la card
                    const cardHTML = `
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card h-100 shadow-sm">
                                <img src="${coverUrl}" class="card-img-top" alt="Portada de ${title}" style="height: 300px; object-fit: cover;">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text text-muted">${author}</p>
                                    <a href="libro.html" class="btn btn-outline-primary mt-auto">Ver más</a>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    // Inyectamos la card en el contenedor
                    resultadosDiv.innerHTML += cardHTML;
                });

            } catch (error) {
                console.error("Error en la búsqueda:", error);
                resultadosDiv.innerHTML = '<div class="col-12 text-center"><p class="text-danger">Ocurrió un error al intentar buscar los libros. Intentá de nuevo.</p></div>';
            }
        });
    }
});