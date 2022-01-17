import { Card, Button } from "react-bootstrap";

function DiscountCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.discount.percent}</Card.Title>
        <Card.Title>{props.discount.fromDate}</Card.Title>
        <Card.Title>{props.discount.toDate}</Card.Title>
        <Card.Text>
          Click in details to know more about this discount!
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default DiscountCard;