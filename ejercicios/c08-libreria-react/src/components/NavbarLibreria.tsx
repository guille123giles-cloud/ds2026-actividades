import { Navbar, Container } from 'react-bootstrap';

export default function NavbarLibreria() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mi Librería</Navbar.Brand>
      </Container>
    </Navbar>
  );
}