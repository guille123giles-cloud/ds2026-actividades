import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

export function LibroDetalle() {
  const { id } = useParams<{ id: string }>();

  // Mock de buscar el libro (en realidad vendría de un backend o estado global)
  const libroId = parseInt(id || '0');
  
  return (
    <Container className="flex-grow-1 mt-4">
      <h2>Detalle del Libro</h2>
      <Card>
        <Card.Body>
          <Card.Title>Libro ID: {libroId}</Card.Title>
          <Card.Text>
            Aquí iría el detalle del libro, su descripción completa, más imágenes, etc.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
