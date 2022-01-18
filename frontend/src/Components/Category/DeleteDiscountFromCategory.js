import React, { useState } from "react";
import axios from "axios";
import { Col, Row, Form, Button, Alert } from "react-bootstrap";
import Select from "react-select";

function DeleteDiscountFromCategory(props) {
  const [feedbackAfterDeleting, setFeedbackAfterDeleting] = useState(null);
  const [discountToDelete, setDiscountToDelete] = useState({});

  const setDiscountToDeleteHandler = (e) => {
    setFeedbackAfterDeleting(null);
    setDiscountToDelete({ discountId: e.value });
  };

  const showFeedbackAfterDeleting = (typeOfAlert, text) => {
    setFeedbackAfterDeleting(<Alert variant={typeOfAlert}>{text}</Alert>);
  };

  const deleteDiscountFromCategoryHandler = async (e) => {
    e.preventDefault();
    console.log("usuwamy");
    await axios.delete(`http://localhost:80/api/categories/${props.category.categoryId}/discount`, {
        data: {discountId: discountToDelete.discountId}
      }).then((response) => {
        if (response.status === 200)
          showFeedbackAfterDeleting("success","Discount has been removed from category!" )
        else showFeedbackAfterDeleting("danger","We couldn't remove this discount from category!");
        props.fetchDiscountsOfSelectedCategory();
      }).catch((e) => {
        console.log(e);
        showFeedbackAfterDeleting("danger","Error occured, propably this discount already is removed from this category. Try with another one.");
      });
  }

  return (
    <Form onSubmit={(e) => deleteDiscountFromCategoryHandler(e)}>
      <h2>Delete discount from category:</h2>
      <Row className="mb-3">
        <Col xs={12} md={12}>
          <Select
            onChange={(e) => setDiscountToDeleteHandler(e)}
            options={props.discountOfCategoryOptions}
            placeholder="Choose discount to delete it from category"
          />
        </Col>
      </Row>
      {feedbackAfterDeleting != null ? feedbackAfterDeleting : null}
      <Button
        className="ps-4 pe-4"
        variant="outline-danger"
        type="submit"
        disabled={feedbackAfterDeleting == null ? false : true}
      >
        Delete discount from category
      </Button>
    </Form>
  );
}

export default DeleteDiscountFromCategory;
