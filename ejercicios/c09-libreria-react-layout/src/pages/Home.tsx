import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Container className="flex-grow-1 mt-5 text-center">
      <h1 className="display-4">Bienvenido a Mi Librería</h1>
      <p className="lead mt-3">
        Descubre nuestra colección de libros destacados y encuentra tu próxima lectura.
      </p>
      <Link to="/catalogo" className="btn btn-primary btn-lg mt-4">
        Ver Catálogo
      </Link>
    </Container>
  );
}
