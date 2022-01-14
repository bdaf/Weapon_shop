import { Card, Button } from "react-bootstrap";

function CategoryCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.category.name}</Card.Title>
        <Card.Text>
          Click in details to know more about this category, especially about
          discounts attachted to it!
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;
