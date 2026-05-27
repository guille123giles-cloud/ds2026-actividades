import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

// Definimos las props tipadas con TypeScript
type LibroCardProps = {
  titulo: string;
  autor: string;
  precio: number;
};

export default function LibroCard({ titulo, autor, precio }: LibroCardProps) {
  // Estado local para los "Me gusta"
  const [likes, setLikes] = useState<number>(0);

  return (
    <Card style={{ width: '18rem', margin: '1rem' }} className="shadow-sm">
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{autor}</Card.Subtitle>
        <Card.Text>
          Precio: ${precio}
        </Card.Text>
        <Button 
            variant="primary" 
            onClick={() => setLikes(likes + 1)}
        >
          Me gusta ({likes})
        </Button>
      </Card.Body>
    </Card>
  );
}