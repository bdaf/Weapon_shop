import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import NewCategoryForm from "../Components/Category/NewCategoryForm";
import CategoriesList from "../Components/Category/CategoriesList";

const api = axios.create({
  baseURL: "http://localhost:80/api/categories",
});

function Categories() {
  const [feedback, setFeedback] = useState(null);

  async function addCategoryHandler(categoryData) {
    // http POST method
    const res = api
      .post("/", { name: categoryData.name })
      .then(function (response) {
        if (response.status === 200) {
          setFeedback(
            <Alert variant="success">Category has been added!</Alert>
          );
          // get result data from http method
          const resultData = response.data;
          console.log(resultData)
          setLoadedCategories((prev) => [...prev, resultData]);
        } else setFeedback(<Alert variant="danger">We couldn't add this category!</Alert>);
      })
      .catch((e) => {
        console.log(e);
        setFeedback(
          <Alert variant="danger">
            Error occured, propably this category already is in database! Try
            with another one.
          </Alert>
        );
      });
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState([]);

  useEffect(() => {
    api.get("/").then(function (response) {
      setIsLoading(false);
      setLoadedCategories(response.data);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <br></br>
      <h4>Add New Category:</h4>
      <NewCategoryForm onAddCategory={addCategoryHandler} />
      {feedback != null ? feedback : null}
      <CategoriesList categories={loadedCategories} />
    </div>
  );
}

export default Categories;
