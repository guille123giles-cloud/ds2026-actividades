import { Container, Row, Col } from 'react-bootstrap';
import LibroCard from '../components/LibroCard';

export function Home() {
  const libros = [
    { id: 1, titulo: "El Aleph", autor: "Jorge Luis Borges", precio: 15000 },
    { id: 2, titulo: "Rayuela", autor: "Julio Cortázar", precio: 18000 },
    { id: 3, titulo: "Ficciones", autor: "Jorge Luis Borges", precio: 14000 }
  ];

  return (
    <Container className="flex-grow-1 mt-4">
      <h2 className="mb-4">Catálogo de Libros Destacados</h2>
      <Row>
        {libros.map((libro) => (
          <Col key={libro.id} xs={12} md={6} lg={4} className="d-flex justify-content-center">
            <LibroCard 
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
