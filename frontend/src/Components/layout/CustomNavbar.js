import { Navbar, Container, Nav} from 'react-bootstrap';
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import styles from './CustomNavbar.module.css';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className={styles.customNavbar}>
    <Container>
      <Navbar.Brand href="#home">
      <MDBIcon icon="hammer" style={{"marginRight": "10px"}}
      />{' '}
      Weapon shop
      </Navbar.Brand>
              <Nav.Link><Link to='products' class="link-light">Products</Link></Nav.Link>
              <Nav.Link><Link to='orders' class="link-light">Orders</Link></Nav.Link>
              <Nav.Link><Link to='categories' class="link-light">Category and Discounts (only for administrator)</Link></Nav.Link>
    </Container>
  </Navbar>
  );
}

export default CustomNavbar;
