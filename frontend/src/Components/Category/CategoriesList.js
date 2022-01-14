import CategoryCard from "./CategoryCard";
import styles from "./CategoriesList.module.css";
import { Col, Row } from "react-bootstrap";

function CategoriesList(props) {
  return (
    <div>
      <Row>
        {props.categories.map((category) => {
          return (
            <Col xs={4} key={category.categoryId} className={styles.cardCenter} bg={"Light"}>
              <CategoryCard category={category} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default CategoriesList;
