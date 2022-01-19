import React, { useState, useRef } from "react";
import axios from "axios";
import { Button, Alert } from "react-bootstrap";
import styles from "./CategoriesList.module.css";


function UpdateCategoryNameForm(props) {
  const [feedbackAfterUpdating, setFeedbackAfterUpdating] = useState(null);
  const nameInputRef = useRef();

  const showFeedbackAfterUpdating = (typeOfAlert, text) => {
    setFeedbackAfterUpdating(<Alert variant={typeOfAlert}>{text}</Alert>);
  };

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;

    const categoryData = {
      categoryId: props.category.categoryId,
      name: enteredName,
    };

    console.log(categoryData);
    axios
      .put(`http://localhost:80/api/categories/${props.category.categoryId}`, {
 
          categoryId: categoryData.categoryId,
          name: categoryData.name 

      })
      .then((response) => {
        if (response.status === 200)
          showFeedbackAfterUpdating("success", "Category has been updated!");
        else
          showFeedbackAfterUpdating(
            "danger",
            "We couldn't update this category!"
          );
          props.onUpdateCategory(categoryData);
      })
      .catch((e) => {
        console.log(e);
        showFeedbackAfterUpdating(
          "danger",
          "Error occured, propably category with that name already exists. Try with another one or later."
        );
      });
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h5>Change name of Category:</h5>
              <label htmlFor="name">Category Name: </label>
              <div className={styles.imargin}>
              <input className="form-control" type="text" onChange={() => setFeedbackAfterUpdating(null)} required id="name" ref={nameInputRef} />
                  </div>
                  <Button
          className="ps-4 pe-4"
          variant="outline-warning"
          type="submit"
          disabled={feedbackAfterUpdating == null ? false : true}
        >Update category</Button>{" "}
        {feedbackAfterUpdating != null ? feedbackAfterUpdating : null}
          </form>
          <br></br>
    </div>
  );
}

export default UpdateCategoryNameForm;
