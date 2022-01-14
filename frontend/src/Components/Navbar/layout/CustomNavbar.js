import { Navbar, Container, Nav} from 'react-bootstrap';
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      <MDBIcon icon="hammer" style={{"marginRight": "10px"}}
      />{' '}
      Weapon shop
      </Navbar.Brand>
    <Nav className="me-auto">
      {/* <Nav.Link><Link to='products'>Products</Link></Nav.Link>
      <Nav.Link><Link to='orders'>Orders</Link></Nav.Link>
      <Nav.Link><Link to='panel'>Category and Discounts (only for administrator)</Link></Nav.Link> */}
      {/* <Nav.Link>Styling ok</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
  );
}

export default CustomNavbar;
