import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import NewCategoryForm from "../Components/Category/NewCategoryForm";
import CategoriesList from "../Components/Category/CategoriesList";
import styles from "../Components/Category/CategoriesList.module.css";

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
          showFeedback("success", "Category has been added!");
          // get result data from http method
          const resultData = response.data;
          console.log(resultData)
          setLoadedCategories((prev) => [...prev, resultData]);
        } else showFeedback("danger", "We couldn't add this category!") ;
      })
      .catch((e) => {
        console.log(e);
        showFeedback("danger", "Error occured, propably this category already is in database! Try with another one.");
      });
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState([]);

  const fetchAllCategories = async () => {
    await api.get("/").then(function (response) {
      setIsLoading(false);
      setLoadedCategories(response.data);
    });
  }

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const showFeedback  = function(typeOfFeedback, text){
    setFeedback(<Alert variant={typeOfFeedback}>{text}</Alert>);
  }

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
          <h2>Categories</h2>
      <NewCategoryForm onAddCategory={addCategoryHandler} />
          <div className={styles.alerts}> {feedback != null ? feedback : null}</div>
      <CategoriesList categories={loadedCategories} updateCategories={fetchAllCategories} 
      showFeedback={showFeedback}/>
    </div>
  );
}

export default Categories;
