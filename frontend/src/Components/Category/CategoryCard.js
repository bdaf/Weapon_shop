import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
import {} from "react-bootstrap";

function CategoryCard(props) {
  const navigate = useNavigate();

  function navigateToDetails() {
    navigate("" + props.category.categoryId);
  }

  const deleteCategoryHandler = async (e) => {
    console.log("usuwamy");
    await axios
      .delete(`http://localhost:80/api/categories/${props.category.categoryId}`)
      .then((response) => {
        if (response.status === 200)
          props.showFeedback("success", "Category has been removed!");
        else props.showFeedback("danger", "We couldn't remove this category!");
        props.updateCategories();
      }).catch((e) => {
        console.log(e);
        props.showFeedback("danger", "Error occured, propably category has unremoved discounts or products with that category, remove them first!");
      });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.category.name}</Card.Title>
        <Card.Text>
          Click in details to know more about this category, especially about
          discounts attachted to it!
        </Card.Text>
        <Button variant="primary" onClick={() => navigateToDetails()}>
          Details
        </Button>{" "}
        <Button variant="danger" onClick={() => deleteCategoryHandler()}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;
