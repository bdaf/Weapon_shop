import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Col, Row, Form, Button, Alert } from "react-bootstrap";
import Select from "react-select";
import AddDiscountToCategory from "./AddDiscountToCategory";

function CRUDiscountToCategory(props) {
 
  const [feedbackAfterDeleting, setFeedbackAfterDeleting] = useState(null);
  const [allDiscountOptions, setAllDiscountOptions] = useState([]);
  const [discountToDelete, setDiscountToDelete] = useState({});
  const [discountOfCategoryOptions, setDiscountOfCategoryOptions] = useState([]);

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


  const deleteDiscountFromCategoryHandler = async (e) => {
    e.preventDefault();
    console.log("usuwamy");
    await axios
      .delete(`http://localhost:80/api/categories/${props.category.categoryId}/discount`, {
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



  const setDiscountToDeleteHandler = (e) => {
    setFeedbackAfterDeleting(null);
    setDiscountToDelete({ discountId: e.value });
  };


  const showFeedbackAfterDeleting = (typeOfAlert, text) => {
    setFeedbackAfterDeleting(<Alert variant={typeOfAlert}>{text}</Alert>);
  };

  return (
    <div className="m-3">
      {/* <UpdateCategoryForm onUpdateCategory={}/> */}
      <AddDiscountToCategory category = {props.category} fetchDiscountsOfSelectedCategory={fetchDiscountsOfSelectedCategory}
      allDiscountOptions = {allDiscountOptions}/>
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

export default CRUDiscountToCategory;
