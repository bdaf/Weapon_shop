import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";



function CategoryCard(props) {
  const navigate = useNavigate();

  function navigateToDetails(){
    navigate(''+props.category.categoryId);
  }

  const deleteCategoryHandler = async (e) => {
    e.preventDefault();
    console.log("usuwamy");
    await axios
      .delete(`http://localhost:80/api/categories/${props.category.categoryId}`, {
        data: {discountId: discountToDelete.discountId}
      })
      .then((response) => {
        if (response.status === 200)
          setFeedbackAfterDeleting(
            <Alert variant="success">
              Discount has been removed from category!
            </Alert>
          );
        else
        setFeedbackAfterDeleting(
            <Alert variant="danger">
              We couldn't remove this discount from category!
            </Alert>
          );
        fetchDiscountsOfSelectedCategory();
      })
      .catch((e) => {
        console.log(e);
        setFeedbackAfterDeleting(
          <Alert variant="danger">
            Error occured, propably this discount already is removed from this category.
            Try with another one.
          </Alert>
        );
      });
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.category.name}</Card.Title>
        <Card.Text>
          Click in details to know more about this category, especially about
          discounts attachted to it!
        </Card.Text>
        <Button variant="primary" onClick={() => navigateToDetails()} >Details</Button>{' '}
        <Button variant="danger" onClick={() => navigateToDetails()} >Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;
