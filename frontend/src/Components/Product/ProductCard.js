import { Card, Button } from "react-bootstrap";


function ProductCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Title>{props.product.description}</Card.Title>
            <Card.Title>{props.product.price}</Card.Title>
            <Card.Title>{props.product.amount}</Card.Title>
            <Card.Title>{props.product.releaseDate}</Card.Title>s
            <Card.Title>{props.product.photoUrl}</Card.Title>
            <Card.Title>{props.product.forSale}</Card.Title>
        <Card.Text>
          Click in details to know more about this product.</Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;