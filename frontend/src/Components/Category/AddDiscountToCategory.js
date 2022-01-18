import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Col, Row, FloatingLabel, Form, Button, Alert } from "react-bootstrap";
import Select from "react-select";

function AddDiscountToCategory(props) {
  const [feedbackAfterAdding, setFeedbackAfterAdding] = useState(null);
  const [feedbackAfterDeleting, setFeedbackAfterDeleting] = useState(null);
  const [discountToAdd, setDiscountToAdd] = useState({});
  const [discountToDelete, setDiscountToDelete] = useState({});
  const [allDiscountOptions, setAllDiscountOptions] = useState([]);
  const [discountOfCategoryOptions, setDiscountOfCategoryOptions] = useState(
    []
  );

  const fetchAllDiscountsData = async () => {
    await axios.get("http://localhost:80/api/discounts").then((response) => {
      console.log("fetchAllDiscountsData()");
      const discountOptions = response.data.map((d) => {
        const discountLabel =
          d.percent * 100 + "% - From: " + d.fromDate + ", To: " + d.toDate;
        return { value: d.discountId, label: discountLabel };
      });
      setAllDiscountOptions(discountOptions);
      console.log(discountOptions);
    });
  };

  const fetchDiscountsOfSelectedCategory = async () => {
    await axios
      .get(`http://localhost:80/api/categories/${props.category.categoryId}`)
      .then((response) => {
        console.log("fetchDiscountsOfSelectedCategory()");
        const discountOptions = response.data.discounts.map((d) => {
          const discountLabel =
            d.percent * 100 + "% - From: " + d.fromDate + ", To: " + d.toDate;
          return { value: d.discountId, label: discountLabel };
        });
        setDiscountOfCategoryOptions(discountOptions);
        console.log(discountOptions);
      });
  };

  useEffect(() => {
    fetchAllDiscountsData();
    fetchDiscountsOfSelectedCategory();
  }, []);

  const addDiscountToCategoryHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:80/api/categories/${props.category.categoryId}`, {
        discountId: discountToAdd.discountId,
      })
      .then((response) => {
        if (response.status === 200)
          setFeedbackAfterAdding(
            <Alert variant="success">
              Discount has been added to category!
            </Alert>
          );
        else
        setFeedbackAfterAdding(
            <Alert variant="danger">
              We couldn't add this discount to category!
            </Alert>
          );
        fetchDiscountsOfSelectedCategory();
      })
      .catch((e) => {
        console.log(e);
        setFeedbackAfterAdding(
          <Alert variant="danger">
            Error occured, propably this discount already is in this category.
            Try with another one.
          </Alert>
        );
      });
  };

  const deleteDiscountFromCategoryHandler = async (e) => {
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

  const setDiscountToAddHandler = (e) => {
    setFeedbackAfterAdding(null);
    setDiscountToAdd({ discountId: e.value });
  };

  const setDiscountToDeleteHandler = (e) => {
    setFeedbackAfterDeleting(null);
    setDiscountToDelete({ discountId: e.value });
  };

  return (
    <div className="m-3">
      <h2>Add discount to:</h2>
      <Form onSubmit={(e) => addDiscountToCategoryHandler(e)}>
        <Row className="mb-3">
          <Col xs={12} md={12}>
            <Select
              onChange={(e) => setDiscountToAddHandler(e)}
              options={allDiscountOptions}
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

      <h2>Delete discount from category:</h2>
      <Form onSubmit={(e) => deleteDiscountFromCategoryHandler(e)}>
        <Row className="mb-3">
          <Col xs={12} md={12}>
            <Select
              onChange={(e) => setDiscountToDeleteHandler(e)}
              options={discountOfCategoryOptions}
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

    </div>
  );
}

export default AddDiscountToCategory;
