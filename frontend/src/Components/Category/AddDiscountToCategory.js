import React, { useState } from "react";
import axios from "axios";
import { Col, Row, Form, Button, Alert } from "react-bootstrap";
import Select from "react-select";

function AddDiscountToCategory(props) {
    const [feedbackAfterAdding, setFeedbackAfterAdding] = useState(null);
    const [discountToAdd, setDiscountToAdd] = useState({});

    const showFeedbackAfterAdding = (typeOfAlert, text) => {
        setFeedbackAfterAdding(<Alert variant={typeOfAlert}>{text}</Alert>);
    }

    const setDiscountToAddHandler = (e) => {
        setFeedbackAfterAdding(null);
        setDiscountToAdd({ discountId: e.value });
      };

    const addDiscountToCategoryHandler = async (e) => {
        e.preventDefault();
        await axios
          .post(`http://localhost:80/api/categories/${props.category.categoryId}`, {
            discountId: discountToAdd.discountId,
          }).then((response) => {
            if (response.status === 200)
                showFeedbackAfterAdding("success", "Discount has been added to category!");
            else showFeedbackAfterAdding("danger", "We couldn't add this discount to category!");
            props.fetchDiscountsOfSelectedCategory();
          }).catch((e) => {
            console.log(e);
            showFeedbackAfterAdding("danger", "Error occured, propably this discount already is in this category. Try with another one.");
          });
      };

  return (
    <Form onSubmit={(e) => addDiscountToCategoryHandler(e)}>
      <h2>Add discount to:</h2>
      <Row className="mb-3">
        <Col xs={12} md={12}>
          <Select
            onChange={(e) => setDiscountToAddHandler(e)}
            options={props.allDiscountOptions}
            placeholder="Choose discount to add it to category"
          />
        </Col>
      </Row>
      {feedbackAfterAdding != null ? feedbackAfterAdding : null}
      <Button
        className="ps-4 pe-4"
        variant="outline-dark"
        type="submit"
        disabled={feedbackAfterAdding == null ? false : true}
      >
        Add discount to category
      </Button>
    </Form>
  );
}

export default AddDiscountToCategory;
