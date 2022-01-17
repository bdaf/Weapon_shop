import DiscountCard from "./DiscountCard";
import styles from "./DiscountsList.module.css";
import { Col, Row } from "react-bootstrap";

function DiscountsList(props) {
    return (
        <div>
            <br></br>

      <Row>
        {props.discounts.map((discount) => {
            return (
                <Col xs={4} key={discount.discountId} className={styles.cardCenter} bg={"Light"}>
              <DiscountCard discount={discount} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default DiscountsList;
