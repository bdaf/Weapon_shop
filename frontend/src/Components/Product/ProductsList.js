import ProductCard from "./ProductCard";
import styles from "./ProductsList.module.css";
import { Col, Row } from "react-bootstrap";

function ProductsList(props) {
  return (
    <div>
      <Row>
        {props.products.map((product) => {
          return (
            <Col
              xs={4}
              key={product.productId}
              className={styles.cardCenter}
              bg={"Light"}
            >
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ProductsList;
