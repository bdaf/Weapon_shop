import { Card, Button } from "react-bootstrap";
import axios from "axios";

function DiscountCard(props) {

  const deleteCategoryHandler = async (e) => {
    e.preventDefault();
    console.log("usuwamy");
    await axios.delete(`http://localhost:80/api/discounts/${props.discount.discountId}`, {
        data: {discountId: props.discount.discountId}
      }).then((response) => {
        if (response.status === 200)
          props.showFeedback("success","Discount has been removed!" )
        else props.showFeedback("danger","We couldn't remove this discount!");
        props.updateDiscounts();
      }).catch((e) => {
        console.log(e);
        props.showFeedback("danger","Error occured. Try with another one or later.");
      });
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Percent: {props.discount.percent*100} %</Card.Title>
        <Card.Title>From: {props.discount.fromDate}</Card.Title>
        <Card.Title>To: {props.discount.toDate}</Card.Title>
        <Card.Text>
          Click in delete button below to ged rid of this discount!
        </Card.Text>
        
        <Button
          className="ps-4 pe-4"
          variant="danger"
          type="submit"
          onClick={deleteCategoryHandler}
        >Delete discount</Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default DiscountCard;