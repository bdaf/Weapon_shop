import { Navbar, Container, Nav} from 'react-bootstrap';
import { MDBIcon } from "mdb-react-ui-kit";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      <MDBIcon icon="hammer" style={{"margin-right": "10px"}}
      />{' '}
      Weapon shop
      </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#orders">Orders</Nav.Link>
      <Nav.Link href="#panel">Category and Discounts (only for administrator)</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default CustomNavbar;
