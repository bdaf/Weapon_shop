import { Navbar, Container, Nav } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import styles from "./CustomNavbar.module.css";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className={styles.customNavbar}>
      <Container>
        <Navbar.Brand>
          <Link to="products" className="link-light">
            <MDBIcon icon="hammer" style={{ marginRight: "10px" }} /> Weaponshop
          </Link>
        </Navbar.Brand>
        <Link to="products" className="link-light">
          Products
        </Link>
        <Link to="orders" className="link-light">
          Orders
        </Link>
        <Link to="categories" className="link-light">
          Category (OFA)
        </Link>
        <Link to="discounts" className="link-light">
          Discounts (OFA)
        </Link>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
