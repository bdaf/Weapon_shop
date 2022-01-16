import { Card, Button } from "react-bootstrap";


function ProductCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>
          Click in details to know more about this product.</Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;