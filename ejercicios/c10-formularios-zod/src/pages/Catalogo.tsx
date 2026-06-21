import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LibroCard from '../components/LibroCard';
import type { Libro } from '../types/libro';

interface Props {
  libros: Libro[];
}

export function Catalogo({ libros }: Props) {
  const navigate = useNavigate();

  return (
    <Container className="flex-grow-1 mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="m-0">Catálogo de Libros Destacados</h2>
        <Button variant="primary" onClick={() => navigate('/libros/nuevo')}>Nuevo Libro</Button>
      </div>
      <Row>
        {libros.map((libro) => (
          <Col key={libro.id} xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
            <LibroCard 
              id={libro.id}
              titulo={libro.titulo} 
              autor={libro.autor} 
              precio={libro.precio} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
