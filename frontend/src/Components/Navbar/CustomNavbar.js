import { Navbar, Container} from 'react-bootstrap';
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
    </Container>
  </Navbar>
  );
}

export default CustomNavbar;
