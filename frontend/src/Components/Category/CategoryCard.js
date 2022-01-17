import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";



function CategoryCard(props) {
  const navigate = useNavigate();

  function navigateToDetails(){
    navigate(''+props.category.categoryId);
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.category.name}</Card.Title>
        <Card.Text>
          Click in details to know more about this category, especially about
          discounts attachted to it!
        </Card.Text>
        <Button variant="primary" onClick={() => navigateToDetails()} >Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;
